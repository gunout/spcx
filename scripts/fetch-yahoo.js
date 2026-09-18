// scripts/fetch-yahoo.js
// Récupère les cours Yahoo Finance pour tous les symboles du dashboard

import fs from 'node:fs/promises';
import path from 'node:path';

/* Tous les symboles à suivre */
const SYMBOLS = {
  etfs:   ['SPCX', 'UFO', 'ARKX', 'ROKT', 'ITA', 'PPA'],
  stocks: ['RKLB', 'ASTS', 'RDW', 'PL', 'SPCE', 'GSAT', 'IRDM', 'LLAP', 'BKSY', 'SATL', 'ASTR', 'MNTS']
};

const ALL_SYMBOLS = [...SYMBOLS.etfs, ...SYMBOLS.stocks];

/* =========================================================
   1. Récupération Yahoo Finance
   ========================================================= */
async function fetchYahoo(symbol, range = '3mo', interval = '1d') {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&interval=${interval}`;
  console.log(`🌐 ${symbol} → ${url}`);

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.9'
    },
    signal: AbortSignal.timeout(15000)
  });

  if (!res.ok) throw new Error(`${symbol} HTTP ${res.status}`);

  const json = await res.json();
  const result = json.chart?.result?.[0];

  if (!result || !result.timestamp) {
    throw new Error(`${symbol} : structure JSON invalide`);
  }

  const meta = result.meta || {};
  const timestamps = result.timestamp;
  const quote = result.indicators.quote[0];

  const history = timestamps.map((ts, i) => ({
    date: new Date(ts * 1000).toISOString().slice(0, 10),
    close: quote.close[i] || 0,
    volume: quote.volume[i] || 0
  })).filter(h => h.close > 0);

  return {
    symbol,
    name: meta.longName || meta.shortName || symbol,
    currency: meta.currency || 'USD',
    exchange: meta.exchangeName || 'NMS',
    price: meta.regularMarketPrice || history[history.length - 1]?.close || 0,
    previousClose: meta.chartPreviousClose || history[history.length - 2]?.close || 0,
    dayHigh: meta.regularMarketDayHigh || 0,
    dayLow: meta.regularMarketDayLow || 0,
    fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh || 0,
    fiftyTwoWeekLow: meta.fiftyTwoWeekLow || 0,
    history
  };
}

/* =========================================================
   2. Fallback local
   ========================================================= */
async function chargerFallback() {
  const file = path.resolve('data/stocks-fallback.json');
  try {
    const raw = await fs.readFile(file, 'utf-8');
    console.log('⚠️  Fallback local utilisé');
    return JSON.parse(raw);
  } catch {
    return { stocks: {}, timestamp: new Date().toISOString() };
  }
}

/* =========================================================
   3. Sauvegarde
   ========================================================= */
async function sauvegarder(stocks) {
  const dir = path.resolve('data');
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, 'stocks.json');

  const payload = {
    stocks,
    timestamp: new Date().toISOString(),
    source: 'Yahoo Finance',
    count: Object.keys(stocks).length
  };

  await fs.writeFile(file, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`✅ ${Object.keys(stocks).length} symboles écrits dans ${file}`);
}

/* =========================================================
   4. Programme principal
   ========================================================= */
async function main() {
  console.log('🚀 Récupération des données Yahoo Finance…\n');
  const stocks = {};

  for (const symbol of ALL_SYMBOLS) {
    try {
      stocks[symbol] = await fetchYahoo(symbol, '3mo', '1d');
      console.log(`✅ ${symbol} : ${stocks[symbol].history.length} jours · $${stocks[symbol].price}\n`);
      // Pause pour éviter le rate limit Yahoo
      await new Promise(r => setTimeout(r, 400));
    } catch (err) {
      console.warn(`⚠️  ${symbol} échoué : ${err.message}\n`);
    }
  }

  /* Si aucun symbole n'a pu être récupéré, on utilise le fallback */
  if (Object.keys(stocks).length === 0) {
    const fallback = await chargerFallback();
    await sauvegarder(fallback.stocks || {});
    return;
  }

  await sauvegarder(stocks);
  console.log('✨ Terminé avec succès');
}

main().catch(err => {
  console.error('❌ Erreur fatale :', err);
  process.exit(1);
});
