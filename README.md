# 🚀 SPCX & Space ETF Tracker

[![GitHub](https://img.shields.io/badge/GitHub-gunout%2Fspcx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunout/spcx)
[![Déployé](https://img.shields.io/badge/Déployé-En_ligne-002395?style=for-the-badge&logo=githubpages&logoColor=white)](https://gunout.github.io/spcx/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-002395?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-0-ED2939?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-1D4ED8?style=for-the-badge)

![ETF](https://img.shields.io/badge/ETF-6-002395?style=flat-square)
![Actions](https://img.shields.io/badge/Actions-12-1D4ED8?style=flat-square)
![Vues](https://img.shields.io/badge/Vues-6-3B82F6?style=flat-square)
![Source](https://img.shields.io/badge/Source-Yahoo_Finance-ED2939?style=flat-square)
![Mise à jour](https://img.shields.io/badge/Mise_à_jour-Horaire-C8102E?style=flat-square)
![Langue](https://img.shields.io/badge/Langue-Français-1D4ED8?style=flat-square)
![Statut](https://img.shields.io/badge/Statut-Stable-22c55e?style=flat-square)

![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-ED2939?style=flat-square)
![France](https://img.shields.io/badge/Thème-🇫🇷_Bleu_Blanc_Rouge-002395?style=flat-square)
![Space](https://img.shields.io/badge/Thème-🚀_NewSpace-1D4ED8?style=flat-square)

---

Dashboard interactif en **HTML / CSS / JavaScript** (fichier unique) permettant de suivre les **ETF spatiaux** et les **actions NewSpace** en temps réel, avec analyse comparative, gestion de portefeuille, alertes de prix et prédictions ML.

Thème visuel : **bleu, blanc, rouge** 🇫🇷 · **Données Yahoo Finance** via GitHub Actions

> 🔗 **Dépôt GitHub** : [github.com/gunout/spcx](https://github.com/gunout/spcx)
>
> 🚀 **Démo en ligne** : [gunout.github.io/spcx](https://gunout.github.io/spcx/)

---

## 📖 Description

Ce projet est un **tracker financier spécialisé** dans le secteur spatial. Il suit en temps réel les principaux ETF du NewSpace ainsi que les actions des entreprises spatiales émergentes (Rocket Lab, AST SpaceMobile, Planet Labs, Virgin Galactic…).

Les données sont récupérées automatiquement depuis **Yahoo Finance** via un workflow **GitHub Actions** qui s'exécute toutes les heures pendant les heures d'ouverture des marchés américains.

---

## ✨ Fonctionnalités

![Dashboard](https://img.shields.io/badge/📈_Dashboard-Prix_%2B_Graphiques-002395?style=flat-square)
![Comparatif](https://img.shields.io/badge/🏆_Comparatif-Score_ETF-1D4ED8?style=flat-square)
![Holdings](https://img.shields.io/badge/📊_Holdings-Composition_SPCX-3B82F6?style=flat-square)
![Portfolio](https://img.shields.io/badge/💰_Portefeuille-Virtuel_%2B_P%26L-ED2939?style=flat-square)
![Alertes](https://img.shields.io/badge/🔔_Alertes-Prix_cibles-C8102E?style=flat-square)
![Prédictions](https://img.shields.io/badge/🤖_Prédictions-Régression_poly-22c55e?style=flat-square)

### 📈 SPCX Dashboard
- Prix en temps réel avec variation journalière
- Graphique de performance avec **MA20**
- Comparaison avec les 4 principaux ETF spatiaux
- Statistiques : volatilité annualisée, performance, volume moyen
- Top 5 holdings avec cours actuels

### 🏆 Comparatif ETF
- Score multicritère (AUM, performance, frais, diversification)
- Grades colorés : **Excellent** 🌟 · **Très bon** 📈 · **Bon** ✅ · **Faible** ⚠️
- Graphique comparatif multi-ETF personnalisable
- Tableau détaillé avec tri

### 📊 Holdings SPCX
- Composition complète du fonds (12 positions)
- Répartition sectorielle (Lanceurs, Satellites, Imagerie, Comms, etc.)
- Top 10 holdings par pondération
- Valeur estimée par ligne

### 💰 Portefeuille virtuel
- Ajout de positions (ETF et actions)
- Calcul automatique du **P&L** en temps réel
- Vue consolidée valeur / coût / profit
- Persistance en **localStorage**

### 🔔 Alertes de prix
- Création d'alertes avec condition (au-dessus / en-dessous)
- Détection automatique du déclenchement
- Statut visuel : ⏳ en attente · 🔔 déclenchée
- Persistance en **localStorage**

### 🤖 Prédictions ML
- Régression polynomiale (degrés 1 à 4)
- Intervalle de confiance automatique
- Détection de tendance : **haussière** 📈 · **baissière** 📉 · **neutre** ➡️
- Tableau détaillé des prédictions jour par jour

---

## 🚀 Utilisation

Aucune installation, aucun build.

![No Install](https://img.shields.io/badge/Installation-Aucune-22c55e?style=for-the-badge)
![No Build](https://img.shields.io/badge/Build-Aucun-22c55e?style=for-the-badge)
![Single File](https://img.shields.io/badge/Fichier-Unique-1D4ED8?style=for-the-badge)

### Option 1 — En ligne (recommandé)

👉 **[SPCX & SPACE ETF TRACKER](https://gunout.github.io/spcx/)**

### Option 2 — En local

```bash
git clone https://github.com/gunout/spcx.git
cd spcx
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 🌐 Déploiement

[![Statut](https://img.shields.io/badge/Statut-En_ligne-22c55e?style=for-the-badge)](https://gunout.github.io/spcx/)
[![URL](https://img.shields.io/badge/URL-gunout.github.io%2Fspcx-002395?style=for-the-badge)](https://gunout.github.io/spcx/)

| Plateforme | Statut | URL |
|------------|--------|-----|
| GitHub Pages | ✅ En ligne | [gunout.github.io/spcx](https://gunout.github.io/spcx/) |
| Netlify / Vercel | ⚙️ Optionnel | Glisser-déposer le dossier |

> 💡 Pour redéployer : le projet étant un simple fichier statique, il suffit de glisser-déposer le dossier sur [Netlify Drop](https://app.netlify.com/drop) ou de connecter le dépôt GitHub à Netlify/Vercel.

---

## 🗂️ Structure du projet

```
.
├── index.html                      # Dashboard (fichier unique)
├── README.md                       # Ce fichier
├── LICENSE                         # Licence MIT
├── data/
│   ├── stocks.json                 # Données Yahoo Finance (généré auto)
│   └── stocks-fallback.json        # Données de secours
├── scripts/
│   └── fetch-yahoo.js              # Script de récupération Node.js
└── .github/
    └── workflows/
        └── update-stocks.yml       # Workflow GitHub Actions
```

Le fichier `index.html` contient :

![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Thème_🇫🇷-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JS-Données_%2B_Rendu-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart](https://img.shields.io/badge/Chart.js-Graphiques-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)

- **HTML** : structure de la page (sidebar + contenu principal)
- **CSS** : styles, thème bleu-blanc-rouge, responsive
- **JavaScript** : données, calculs, rendu dynamique, gestion d'état
- **Chart.js** : graphiques line, doughnut, bar

---

## 📊 Symboles suivis

### ETF spatiaux (6)

| Symbole | Nom complet | AUM | Frais |
|---------|-------------|-----|-------|
| **SPCX** | SPAC & NewSpace ETF (ProcureAM) | $125M | 0.75% |
| **UFO** | Procure Space ETF | $180M | 0.75% |
| **ARKX** | ARK Space Exploration ETF | $350M | 0.75% |
| **ROKT** | SPDR S&P Aerospace & Defense | $800M | 0.35% |
| **ITA** | iShares US Aerospace & Defense | $5.2B | 0.40% |
| **PPA** | Invesco Aerospace & Defense | $2.1B | 0.56% |

### Actions NewSpace (12) — Holdings SPCX

| Symbole | Société | Secteur | Poids |
|---------|---------|---------|-------|
| **RKLB** | Rocket Lab USA | Lanceurs | 12.5% |
| **ASTS** | AST SpaceMobile | Satellites | 8.2% |
| **PL** | Planet Labs | Imagerie | 7.5% |
| **RDW** | Redwire | Infrastructure | 6.8% |
| **IRDM** | Iridium | Communications | 6.2% |
| **SPCE** | Virgin Galactic | Tourisme | 5.2% |
| **GSAT** | Globalstar | Communications | 4.8% |
| **LLAP** | Terran Orbital | Satellites | 3.5% |
| **BKSY** | BlackSky | Imagerie | 3.2% |
| **SATL** | Satellogic | Imagerie | 2.8% |
| **ASTR** | Astra Space | Lanceurs | 2.5% |
| **MNTS** | Momentus | Logistique | 1.8% |

---

## 🔄 Mise à jour automatique

Les données sont mises à jour automatiquement par **GitHub Actions** :

| Déclencheur | Fréquence |
|-------------|-----------|
| **Cron planifié** | Toutes les heures de 13h à 22h UTC (heures d'ouverture US), du lundi au vendredi |
| **Push** | À chaque modification des scripts ou du workflow |
| **Manuel** | Bouton « Run workflow » dans l'onglet Actions |

### Script de récupération

Le fichier `scripts/fetch-yahoo.js` interroge **Yahoo Finance** pour chaque symbole et génère un fichier `data/stocks.json` structuré :

```json
{
  "stocks": {
    "SPCX": {
      "symbol": "SPCX",
      "name": "SPAC and NewSpace ETF",
      "price": 12.45,
      "previousClose": 12.30,
      "history": [
        { "date": "2026-09-17", "close": 12.30, "volume": 145000 },
        { "date": "2026-09-18", "close": 12.45, "volume": 168000 }
      ]
    }
  },
  "timestamp": "2026-09-18T14:00:00.000Z",
  "source": "Yahoo Finance",
  "count": 18
}
```

### Architecture

```
GitHub Actions (cron horaire)
    ↓ Node.js (sans CORS)
Yahoo Finance API
    ↓ données JSON
Commit → data/stocks.json
    ↓ GitHub Pages sert le fichier
Dashboard fetch() local (pas de CORS)
    ↓
Affichage temps réel
```

---

## 🎨 Personnalisation

### 1. Modifier les ETF suivis

Dans `index.html`, tableau `SPACE_ETFS` :

```javascript
const SPACE_ETFS = {
  'SPCX': {name:'SPAC & NewSpace ETF', aum:125e6, expense_ratio:0.75, holdings:25, base:12.50},
  // Ajoutez vos propres ETF ici
};
```

### 2. Modifier les holdings

Tableau `SPCX_HOLDINGS` :

```javascript
const SPCX_HOLDINGS = {
  'RKLB': {name:'Rocket Lab USA', weight:12.5, sector:'Lanceurs', base:5.20},
  // ...
};
```

### 3. Modifier les symboles du workflow

Dans `scripts/fetch-yahoo.js` :

```javascript
const SYMBOLS = {
  etfs:   ['SPCX', 'UFO', 'ARKX', 'ROKT', 'ITA', 'PPA'],
  stocks: ['RKLB', 'ASTS', 'RDW', /* ... */]
};
```

### 4. Modifier le thème

Les variables CSS sont définies dans `:root` :

```css
:root{
  --bleu:#002395;
  --rouge:#ED2939;
  --blanc:#ffffff;
  /* ... */
}
```

---

## ⚠️ Avertissement

> **Ce projet est fourni à titre pédagogique et informatif uniquement.**
>
> Les données affichées sont récupérées depuis **Yahoo Finance** et peuvent contenir des inexactitudes ou des retards.
>
> **Ce dashboard ne constitue en aucun cas un conseil en investissement.** Consultez un professionnel agréé avant toute décision financière.

---

## 🌐 Compatibilité

| Navigateur | Version minimale | Statut |
|------------|------------------|--------|
| ![Chrome](https://img.shields.io/badge/Chrome-80+-4285F4?style=flat-square&logo=googlechrome&logoColor=white) | 80+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Firefox](https://img.shields.io/badge/Firefox-78+-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white) | 78+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Edge](https://img.shields.io/badge/Edge-80+-0078D7?style=flat-square&logo=microsoftedge&logoColor=white) | 80+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white) | 14+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |

Aucune librairie externe n'est requise (pas de React, Vue, D3…). Seul **Chart.js** est chargé via CDN.

---

## 📄 Licence

![License MIT](https://img.shields.io/badge/License-MIT-002395?style=for-the-badge)

Ce projet est distribué sous licence **MIT**.

Vous êtes libre de l'utiliser, le modifier et le redistribuer, y compris à des fins commerciales, à condition de conserver la mention de copyright.

```text
MIT License

Copyright (c) 2026 Gunout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Crédits

![Source](https://img.shields.io/badge/Source-Yahoo_Finance-1D4ED8?style=flat-square)
![Automation](https://img.shields.io/badge/Automation-GitHub_Actions-3B82F6?style=flat-square)
![Thème](https://img.shields.io/badge/Thème-🇫🇷_Bleu_Blanc_Rouge-002395?style=flat-square)

- Données de marché : **Yahoo Finance**
- Automatisation : **GitHub Actions**
- Inspiration : dashboard Streamlit original « SPCX & Space ETF Tracker »
- Thème visuel : bleu, blanc, rouge — en hommage à la France 🇫🇷

---

## 🌟 Aperçu



---

**Bon trading !** 🚀🌌📈

[![Voir sur GitHub](https://img.shields.io/badge/Voir_sur-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunout/spcx)
[![Voir la Démo](https://img.shields.io/badge/Voir_la-Démo-002395?style=for-the-badge&logo=githubpages&logoColor=white)](https://gunout.github.io/spcx/)

---

<div align="center">

### 🇫🇷 Gunout · 2026

![Made in France](https://img.shields.io/badge/Made_in-France-002395?style=flat-square&labelColor=FFFFFF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMjM5NSIvPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNDAwIiB5PSIxMDAiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjIwMCIgeT0iNDAwIiBmaWxsPSIjZWQyOTM5Ii8+PC9zdmc+)
![GitHub](https://img.shields.io/badge/GitHub-gunout-181717?style=flat-square&logo=github&logoColor=white)
![Year](https://img.shields.io/badge/2026-ED2939?style=flat-square&labelColor=FFFFFF)

<sub>© 2026 <strong>Gunout</strong> — Tous droits réservés.</sub>

</div>
