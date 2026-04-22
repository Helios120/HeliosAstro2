# HeliosAstro — Site complet prêt pour GitHub Pages

Ce dossier contient une base complète de site vitrine HeliosAstro, pensée pour GitHub Pages et pour un rendu web fort visuellement.

---

## Arborescence

```text
heliosastro/
├─ index.html
├─ offres.html
├─ logiciel.html
├─ livre.html
├─ contact.html
├─ style.css
├─ script.js
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ logo-heliosastro.png
   ├─ roue-heliosastro.png
   ├─ livre-dieu-est-la-lumiere.jpg
   ├─ icon-192.png
   └─ icon-512.png
```

---

## 1) index.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HeliosAstro — Astrologie visuelle, vibratoire et géométrique</title>
  <meta name="description" content="HeliosAstro propose une astrologie visuelle, vibratoire et géométrique : thèmes astraux, transits, révolution solaire et univers photonique inspiré de la géométrie sacrée.">
  <meta name="keywords" content="HeliosAstro, astrologie, thème astral, révolution solaire, transits, géométrie sacrée, astrologie visuelle, astrologie vibratoire">
  <meta name="author" content="HeliosAstro">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="HeliosAstro — Astrologie visuelle, vibratoire et géométrique">
  <meta property="og:description" content="Une approche singulière de l'astrologie : lumière, géométrie, vibration et lecture symbolique de haute précision.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/logo-heliosastro.png">
  <link rel="canonical" href="https://heliosastro.com/">
  <link rel="icon" type="image/png" href="assets/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="theme-dark">
  <canvas id="bgCanvas"></canvas>

  <header class="site-header glass">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <img src="assets/logo-heliosastro.png" alt="Logo HeliosAstro" class="brand-logo">
        <span>HeliosAstro</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Accueil</a>
        <a href="offres.html">Offres</a>
        <a href="logiciel.html">Logiciel</a>
        <a href="livre.html">Livre</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy glass strong-glow">
          <p class="eyebrow">Astrologie visuelle, vibratoire et géométrique</p>
          <h1>Entrez dans un univers où la lumière révèle la structure cachée du thème astral.</h1>
          <p class="lead">HeliosAstro réunit lecture symbolique, géométrie sacrée, mouvement photonique et esthétique cosmique pour proposer une expérience astrologique immersive, précise et profondément singulière.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="offres.html">Découvrir les offres</a>
            <a class="btn btn-secondary" href="logiciel.html">Voir le logiciel</a>
          </div>
        </div>
        <div class="hero-visual glass panel-visual">
          <img src="assets/roue-heliosastro.png" alt="Roue astrologique HeliosAstro" class="hero-wheel floating">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container three-cards">
        <article class="card glass">
          <h2>Vision</h2>
          <p>Une astrologie qui ne se contente pas de décrire : elle montre, structure et met en mouvement les forces du ciel dans une esthétique cohérente et vibrante.</p>
        </article>
        <article class="card glass">
          <h2>Précision</h2>
          <p>Lecture des degrés, architecture circulaire, dynamique des arcs, planètes extérieures au zodiaque et rendu pensé pour la compréhension visuelle immédiate.</p>
        </article>
        <article class="card glass">
          <h2>Expérience</h2>
          <p>Une interface pensée pour le web moderne : contrastes forts, lumière vivante, profondeur cosmique et animations inspirées d’un flux photonique intelligent.</p>
        </article>
      </div>
    </section>

    <section class="section split-section">
      <div class="container split-grid">
        <div class="glass content-box">
          <p class="eyebrow">Système de diffusion photonique</p>
          <h2>Une lumière qui part du centre et irrigue les arcs comme une respiration cosmique.</h2>
          <p>Le cœur visuel du site s’appuie sur une logique de diffusion lumineuse : impulsions, spirales, halos et particules convergent puis se projettent vers l’extérieur, comme une lecture vivante du centre vers les degrés du ciel.</p>
          <p>Le résultat est plus qu’un décor. C’est une signature visuelle HeliosAstro.</p>
        </div>
        <div class="glass photon-box">
          <canvas id="photonCanvas" width="700" height="700" aria-label="Animation photonique HeliosAstro"></canvas>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-grid reverse-mobile">
        <div class="glass book-box">
          <img src="assets/livre-dieu-est-la-lumiere.jpg" alt="Livre Dieu est la lumière - la géométrie sacrée" class="book-cover glowing-book">
        </div>
        <div class="glass content-box">
          <p class="eyebrow">Livre fondateur</p>
          <h2>Dieu est la lumière — la géométrie sacrée</h2>
          <p>Le livre prolonge l’ADN d’HeliosAstro : lumière, structure, vibration, organisation symbolique du réel et rapport profond entre forme, énergie et conscience.</p>
          <a class="btn btn-primary" href="livre.html">Découvrir le livre</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container cta glass strong-glow">
        <h2>Votre carte du ciel mérite mieux qu’un rendu banal.</h2>
        <p>Choisissez une lecture sensible, structurée et visuellement puissante.</p>
        <div class="hero-actions center">
          <a class="btn btn-primary" href="contact.html">Prendre contact</a>
          <a class="btn btn-secondary" href="offres.html">Voir les prestations</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer glass">
    <div class="container footer-grid">
      <div>
        <strong>HeliosAstro</strong>
        <p>Astrologie visuelle, vibratoire et géométrique.</p>
      </div>
      <div>
        <a href="offres.html">Offres</a>
        <a href="logiciel.html">Logiciel</a>
        <a href="livre.html">Livre</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 2) offres.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offres — HeliosAstro</title>
  <meta name="description" content="Découvrez les offres HeliosAstro : thème astral, transit sur 3 mois et révolution solaire.">
  <link rel="canonical" href="https://heliosastro.com/offres.html">
  <link rel="icon" type="image/png" href="assets/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="theme-dark">
  <canvas id="bgCanvas"></canvas>

  <header class="site-header glass">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <img src="assets/logo-heliosastro.png" alt="Logo HeliosAstro" class="brand-logo">
        <span>HeliosAstro</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Accueil</a>
        <a href="offres.html" class="active">Offres</a>
        <a href="logiciel.html">Logiciel</a>
        <a href="livre.html">Livre</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main class="section">
    <div class="container">
      <div class="section-title glass">
        <p class="eyebrow">Prestations</p>
        <h1>Des lectures claires, sensibles et structurées</h1>
        <p>Chaque offre vise une compréhension concrète du mouvement céleste qui vous traverse.</p>
      </div>

      <div class="pricing-grid">
        <article class="price-card glass strong-glow">
          <h2>Thème astral</h2>
          <p class="price">50 €</p>
          <ul>
            <li>Analyse du thème de naissance</li>
            <li>Lecture symbolique structurée</li>
            <li>Approche visuelle et vibratoire</li>
            <li>Format numérique</li>
          </ul>
          <a class="btn btn-primary" href="contact.html">Commander</a>
        </article>

        <article class="price-card glass">
          <h2>Transit pour 3 mois</h2>
          <p class="price">25 €</p>
          <ul>
            <li>Lecture des mouvements à venir</li>
            <li>Points d’intensité et de bascule</li>
            <li>Période de 3 mois</li>
            <li>Format numérique</li>
          </ul>
          <a class="btn btn-primary" href="contact.html">Commander</a>
        </article>

        <article class="price-card glass">
          <h2>Révolution solaire</h2>
          <p class="price">35 €</p>
          <ul>
            <li>Lecture de l’année astrologique</li>
            <li>Axes majeurs d’évolution</li>
            <li>Vision synthétique et profonde</li>
            <li>Format numérique</li>
          </ul>
          <a class="btn btn-primary" href="contact.html">Commander</a>
        </article>
      </div>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 3) logiciel.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logiciel — HeliosAstro</title>
  <meta name="description" content="Découvrez l’univers logiciel HeliosAstro : roue astrologique, structure géométrique et dynamique photonique.">
  <link rel="canonical" href="https://heliosastro.com/logiciel.html">
  <link rel="icon" type="image/png" href="assets/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="theme-dark">
  <canvas id="bgCanvas"></canvas>

  <header class="site-header glass">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <img src="assets/logo-heliosastro.png" alt="Logo HeliosAstro" class="brand-logo">
        <span>HeliosAstro</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Accueil</a>
        <a href="offres.html">Offres</a>
        <a href="logiciel.html" class="active">Logiciel</a>
        <a href="livre.html">Livre</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main class="section">
    <div class="container">
      <div class="section-title glass">
        <p class="eyebrow">Outil visuel</p>
        <h1>Une lecture astrologique vivante</h1>
        <p>Le logiciel HeliosAstro met en scène la carte du ciel dans un langage circulaire, énergétique et lumineux.</p>
      </div>

      <div class="software-grid">
        <div class="glass software-view">
          <img src="assets/roue-heliosastro.png" alt="Roue astrologique HeliosAstro" class="software-wheel floating-slow">
        </div>
        <div class="glass content-box">
          <h2>Ce que l’univers HeliosAstro prépare</h2>
          <ul class="clean-list">
            <li>Planètes visibles à l’extérieur du zodiaque</li>
            <li>Arcs colorés rivés aux degrés réels</li>
            <li>Lecture fluide des dynamiques célestes</li>
            <li>Interface immersive et lumineuse</li>
            <li>Base idéale pour futur export PDF</li>
          </ul>
          <a class="btn btn-primary" href="contact.html">Demander une démonstration</a>
        </div>
      </div>

      <div class="glass software-demo-block">
        <canvas id="orbitsCanvas" width="1200" height="700" aria-label="Visualisation orbitale HeliosAstro"></canvas>
      </div>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 4) livre.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livre — HeliosAstro</title>
  <meta name="description" content="Découvrez le livre Dieu est la lumière — la géométrie sacrée, dans l’univers HeliosAstro.">
  <link rel="canonical" href="https://heliosastro.com/livre.html">
  <link rel="icon" type="image/png" href="assets/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="theme-dark">
  <canvas id="bgCanvas"></canvas>

  <header class="site-header glass">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <img src="assets/logo-heliosastro.png" alt="Logo HeliosAstro" class="brand-logo">
        <span>HeliosAstro</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Accueil</a>
        <a href="offres.html">Offres</a>
        <a href="logiciel.html">Logiciel</a>
        <a href="livre.html" class="active">Livre</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main class="section">
    <div class="container split-grid">
      <div class="glass book-box">
        <img src="assets/livre-dieu-est-la-lumiere.jpg" alt="Livre Dieu est la lumière - la géométrie sacrée" class="book-cover big-book glowing-book">
      </div>
      <div class="glass content-box">
        <p class="eyebrow">Publication</p>
        <h1>Dieu est la lumière — la géométrie sacrée</h1>
        <p>Un ouvrage au cœur de la vision HeliosAstro : la lumière comme principe organisateur, la forme comme langage, et la géométrie comme structure profonde du visible et de l’invisible.</p>
        <p>Ce livre s’adresse à celles et ceux qui cherchent une lecture plus vaste de la réalité, à la croisée du symbole, du mouvement et de la conscience.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="https://www.amazon.fr/Dieu-est-lumiere-geometrie-sacr%C4%97e/dp/B08MSNHZDR" target="_blank" rel="noopener">Voir sur Amazon</a>
          <a class="btn btn-secondary" href="contact.html">Contacter HeliosAstro</a>
        </div>
      </div>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 5) contact.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — HeliosAstro</title>
  <meta name="description" content="Contactez HeliosAstro pour commander un thème astral, un transit ou une révolution solaire.">
  <link rel="canonical" href="https://heliosastro.com/contact.html">
  <link rel="icon" type="image/png" href="assets/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="theme-dark">
  <canvas id="bgCanvas"></canvas>

  <header class="site-header glass">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <img src="assets/logo-heliosastro.png" alt="Logo HeliosAstro" class="brand-logo">
        <span>HeliosAstro</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Accueil</a>
        <a href="offres.html">Offres</a>
        <a href="logiciel.html">Logiciel</a>
        <a href="livre.html">Livre</a>
        <a href="contact.html" class="active">Contact</a>
      </nav>
    </div>
  </header>

  <main class="section">
    <div class="container split-grid">
      <div class="glass content-box">
        <p class="eyebrow">Prise de contact</p>
        <h1>Commande, question ou demande personnalisée</h1>
        <p>Pour recevoir une prestation HeliosAstro, il suffit d’envoyer vos coordonnées de naissance et votre demande.</p>
        <ul class="clean-list">
          <li>Date de naissance</li>
          <li>Heure de naissance</li>
          <li>Lieu de naissance</li>
          <li>Type de prestation souhaitée</li>
        </ul>
      </div>

      <div class="glass form-box">
        <form class="contact-form" action="mailto:contact@heliosastro.com" method="post" enctype="text/plain">
          <label for="name">Nom</label>
          <input id="name" name="name" type="text" placeholder="Votre nom" required>

          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Votre email" required>

          <label for="service">Prestation</label>
          <select id="service" name="service">
            <option>Thème astral</option>
            <option>Transit pour 3 mois</option>
            <option>Révolution solaire</option>
            <option>Autre demande</option>
          </select>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Votre message"></textarea>

          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 6) style.css

```css
:root {
  --bg: #05060a;
  --bg-2: #0d1020;
  --text: #f2f5ff;
  --muted: #b9c1db;
  --line: rgba(255,255,255,0.09);
  --glass: rgba(8, 14, 34, 0.5);
  --glow-1: rgba(80, 180, 255, 0.45);
  --glow-2: rgba(255, 70, 190, 0.3);
  --glow-3: rgba(80, 255, 220, 0.2);
  --accent: #8fd7ff;
  --accent-2: #ff71cb;
  --gold: #ffd98f;
  --radius: 22px;
  --shadow: 0 10px 40px rgba(0,0,0,0.35);
  --max: 1200px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at 20% 20%, rgba(118, 69, 255, 0.10), transparent 30%),
    radial-gradient(circle at 80% 15%, rgba(0, 225, 255, 0.09), transparent 25%),
    radial-gradient(circle at 50% 80%, rgba(255, 100, 185, 0.08), transparent 30%),
    linear-gradient(180deg, #05060a 0%, #0b1120 60%, #05060a 100%);
  color: var(--text);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

#bgCanvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.95;
}

body > *:not(#bgCanvas) {
  position: relative;
  z-index: 1;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(var(--max), calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 64px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0.4px;
}

.brand-logo {
  width: 46px;
  height: 46px;
  object-fit: contain;
  filter: drop-shadow(0 0 14px rgba(146, 228, 255, 0.35));
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.main-nav a {
  color: var(--text);
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 999px;
  transition: 0.25s ease;
  border: 1px solid transparent;
}

.main-nav a:hover,
.main-nav a.active {
  border-color: rgba(143, 215, 255, 0.28);
  background: rgba(255,255,255,0.04);
  box-shadow: 0 0 20px rgba(143, 215, 255, 0.08);
}

.glass {
  background: var(--glass);
  border: 1px solid var(--line);
  backdrop-filter: blur(12px);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.strong-glow {
  box-shadow:
    var(--shadow),
    0 0 30px rgba(120, 220, 255, 0.10),
    0 0 80px rgba(255, 110, 210, 0.06);
}

.hero-grid,
.split-grid,
.software-grid,
.footer-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: center;
}

.hero-copy,
.content-box,
.panel-visual,
.photon-box,
.book-box,
.form-box,
.section-title,
.cta,
.software-demo-block,
.software-view {
  padding: 28px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.78rem;
  color: var(--accent);
  margin-bottom: 12px;
}

h1, h2, h3 {
  margin-top: 0;
  line-height: 1.1;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 4.4rem);
}

h2 {
  font-size: clamp(1.45rem, 3.2vw, 2.3rem);
}

.lead,
p,
li,
label,
input,
textarea,
select,
button {
  font-size: 1rem;
  line-height: 1.7;
}

p, li {
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.hero-actions.center {
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #061019;
  background: linear-gradient(135deg, #9fe7ff, #ffd98f 120%);
  box-shadow: 0 0 28px rgba(159, 231, 255, 0.24);
}

.btn-secondary {
  color: var(--text);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
}

.hero-wheel,
.software-wheel {
  width: min(100%, 520px);
  margin: 0 auto;
  filter: drop-shadow(0 0 24px rgba(119, 219, 255, 0.20));
}

.book-cover {
  border-radius: 18px;
  margin: 0 auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
}

.big-book {
  max-width: 420px;
}

.three-cards,
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card,
.price-card {
  padding: 24px;
}

.price {
  font-size: 2.1rem;
  font-weight: 800;
  color: var(--gold);
  margin: 12px 0 18px;
}

.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.clean-list li,
.price-card li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.clean-list li::before,
.price-card li::before {
  content: "✦";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.contact-form {
  display: grid;
  gap: 10px;
}

input,
textarea,
select {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #93a2c9;
}

input:focus,
textarea:focus,
select:focus {
  border-color: rgba(143, 215, 255, 0.45);
  box-shadow: 0 0 0 3px rgba(143, 215, 255, 0.08);
}

#photonCanvas,
#orbitsCanvas {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
  background: radial-gradient(circle at center, rgba(255,255,255,0.03), rgba(0,0,0,0.08));
}

.site-footer {
  margin: 20px auto 30px;
}

.footer-grid {
  grid-template-columns: 1fr auto;
  padding: 24px;
}

.footer-grid a {
  color: var(--muted);
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
}

.floating {
  animation: floatY 6s ease-in-out infinite;
}

.floating-slow {
  animation: floatY 9s ease-in-out infinite;
}

.glowing-book {
  animation: glowPulse 4.5s ease-in-out infinite;
}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes glowPulse {
  0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.45), 0 0 25px rgba(143, 215, 255, 0.08); }
  50% { box-shadow: 0 22px 65px rgba(0,0,0,0.5), 0 0 42px rgba(255, 113, 203, 0.16); }
}

@media (max-width: 980px) {
  .hero-grid,
  .split-grid,
  .software-grid,
  .footer-grid,
  .three-cards,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;
  }

  .main-nav {
    justify-content: center;
  }

  .reverse-mobile > :first-child {
    order: 2;
  }

  .reverse-mobile > :last-child {
    order: 1;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 38px 0;
  }

  .hero-copy,
  .content-box,
  .panel-visual,
  .photon-box,
  .book-box,
  .form-box,
  .section-title,
  .cta,
  .software-demo-block,
  .software-view,
  .card,
  .price-card {
    padding: 20px;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
```

---

## 7) script.js

```javascript
(function () {
  const bg = document.getElementById('bgCanvas');
  if (bg) initBackground(bg);

  const photonCanvas = document.getElementById('photonCanvas');
  if (photonCanvas) initPhotonSystem(photonCanvas);

  const orbitsCanvas = document.getElementById('orbitsCanvas');
  if (orbitsCanvas) initOrbitSystem(orbitsCanvas);
})();

function initBackground(canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let stars = [];
  let mouse = { x: null, y: null };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from({ length: Math.min(220, Math.floor((w * h) / 9000)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.7 + 0.3,
      a: Math.random() * Math.PI * 2,
      s: Math.random() * 0.3 + 0.05,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (const star of stars) {
      star.a += star.s * 0.02;
      const alpha = 0.45 + Math.sin(star.a) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = `rgba(180,220,255,${alpha})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 6; i++) {
      const radius = 120 + i * 90;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${i % 2 === 0 ? '120,220,255' : '255,110,210'},${0.025 - i * 0.002})`;
      ctx.lineWidth = 1;
      ctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    if (mouse.x !== null && mouse.y !== null) {
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
      g.addColorStop(0, 'rgba(180,240,255,0.13)');
      g.addColorStop(1, 'rgba(180,240,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();
  draw();
}

function initPhotonSystem(canvas) {
  const ctx = canvas.getContext('2d');
  let w = canvas.width;
  let h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const rings = [70, 120, 175, 235, 300];
  const particles = Array.from({ length: 180 }, (_, i) => ({
    orbit: rings[i % rings.length],
    angle: Math.random() * Math.PI * 2,
    speed: 0.003 + Math.random() * 0.008,
    phase: Math.random() * 100,
    size: Math.random() * 2.4 + 0.8,
  }));

  function loop(t) {
    ctx.clearRect(0, 0, w, h);

    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, rings[rings.length - 1] + 80);
    bg.addColorStop(0, 'rgba(255,255,255,0.025)');
    bg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    rings.forEach((r, index) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = index % 2 === 0 ? 'rgba(95,215,255,0.22)' : 'rgba(255,110,210,0.18)';
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 / 18) * i + t * 0.00035;
      const x2 = cx + Math.cos(angle) * rings[rings.length - 1];
      const y2 = cy + Math.sin(angle) * rings[rings.length - 1];
      const grad = ctx.createLinearGradient(cx, cy, x2, y2);
      grad.addColorStop(0, 'rgba(255,255,255,0.12)');
      grad.addColorStop(0.5, i % 2 === 0 ? 'rgba(112,222,255,0.08)' : 'rgba(255,113,203,0.08)');
      grad.addColorStop(1, 'rgba(255,255,255,0.01)');
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.1;
      ctx.moveTo(cx, cy);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    particles.forEach((p, idx) => {
      p.angle += p.speed;
      const pulse = (Math.sin(t * 0.004 + p.phase) + 1) / 2;
      const drift = 8 * Math.sin(t * 0.0015 + idx);
      const r = p.orbit + drift;
      const x = cx + Math.cos(p.angle) * r;
      const y = cy + Math.sin(p.angle) * r;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 12);
      g.addColorStop(0, idx % 3 === 0 ? `rgba(255,220,150,${0.95 * pulse})` : `rgba(140,230,255,${0.95 * pulse})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, p.size + pulse * 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
    core.addColorStop(0, 'rgba(255,245,180,0.95)');
    core.addColorStop(0.28, 'rgba(160,235,255,0.60)');
    core.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(cx, cy, 60, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function initOrbitSystem(canvas) {
  const ctx = canvas.getContext('2d');
  let w = canvas.width;
  let h = canvas.height;
  let mouseX = w / 2;
  let mouseY = h / 2;
  const cx = () => w / 2;
  const cy = () => h / 2;
  const rings = [100, 150, 205, 265];
  const planets = [
    { label: '☉', radius: 100, speed: 0.006, size: 12, offset: 0.1 },
    { label: '☽', radius: 150, speed: 0.0048, size: 10, offset: 1.4 },
    { label: '☿', radius: 205, speed: 0.0036, size: 10, offset: 2.1 },
    { label: '♀', radius: 265, speed: 0.0028, size: 11, offset: 0.6 },
    { label: '♂', radius: 315, speed: 0.0022, size: 11, offset: 2.8 },
    { label: '♃', radius: 360, speed: 0.0016, size: 12, offset: 4.0 },
  ];

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
    mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
  });

  function draw(t) {
    ctx.clearRect(0, 0, w, h);

    const grad = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), 430);
    grad.addColorStop(0, 'rgba(255,255,255,0.02)');
    grad.addColorStop(1, 'rgba(0,0,0,0.02)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    rings.forEach((r, i) => {
      ctx.beginPath();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(113,220,255,0.25)' : 'rgba(255,113,203,0.18)';
      ctx.arc(cx(), cy(), r, 0, Math.PI * 2);
      ctx.stroke();
    });

    for (let i = 0; i < 36; i++) {
      const a = (Math.PI * 2 / 36) * i;
      const r1 = 80;
      const r2 = 390;
      const x1 = cx() + Math.cos(a) * r1;
      const y1 = cy() + Math.sin(a) * r1;
      const x2 = cx() + Math.cos(a) * r2;
      const y2 = cy() + Math.sin(a) * r2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(255,255,255,0.035)';
      ctx.stroke();
    }

    planets.forEach((p, idx) => {
      const angle = t * p.speed + p.offset;
      const pullX = (mouseX - cx()) * 0.02;
      const pullY = (mouseY - cy()) * 0.02;
      const x = cx() + Math.cos(angle) * p.radius + pullX;
      const y = cy() + Math.sin(angle) * p.radius + pullY;

      ctx.beginPath();
      ctx.strokeStyle = idx % 2 === 0 ? 'rgba(113,220,255,0.18)' : 'rgba(255,113,203,0.18)';
      ctx.lineWidth = 2;
      ctx.arc(cx(), cy(), p.radius, angle - 0.5, angle + 0.5);
      ctx.stroke();

      const glow = ctx.createRadialGradient(x, y, 0, x, y, 24);
      glow.addColorStop(0, idx % 2 === 0 ? 'rgba(160,235,255,0.95)' : 'rgba(255,170,220,0.95)');
      glow.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, 24, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f6f8ff';
      ctx.font = `${p.size * 2}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.label, x, y);
    });

    const centerGlow = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), 52);
    centerGlow.addColorStop(0, 'rgba(255,229,155,1)');
    centerGlow.addColorStop(0.28, 'rgba(255,200,120,0.75)');
    centerGlow.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = centerGlow;
    ctx.beginPath();
    ctx.arc(cx(), cy(), 52, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}
```

---

## 8) robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://heliosastro.com/sitemap.xml
```

---

## 9) sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://heliosastro.com/</loc>
  </url>
  <url>
    <loc>https://heliosastro.com/offres.html</loc>
  </url>
  <url>
    <loc>https://heliosastro.com/logiciel.html</loc>
  </url>
  <url>
    <loc>https://heliosastro.com/livre.html</loc>
  </url>
  <url>
    <loc>https://heliosastro.com/contact.html</loc>
  </url>
</urlset>
```

---

## 10) Mise en ligne GitHub Pages

1. Crée un dossier `heliosastro` sur ton ordinateur.
2. Mets tous les fichiers ci-dessus dedans.
3. Crée le sous-dossier `assets`.
4. Dépose dedans :

   * `logo-heliosastro.png`
   * `roue-heliosastro.png`
   * `livre-dieu-est-la-lumiere.jpg`
   * `icon-192.png`
   * `icon-512.png`
5. Ouvre GitHub.
6. Crée un dépôt, par exemple `heliosastro-site`.
7. Clique sur **Add file** puis **Upload files**.
8. Envoie tout le contenu du dossier.
9. Valide avec **Commit changes**.
10. Va dans **Settings > Pages**.
11. Dans **Branch**, choisis `main` puis `/root`.
12. Sauvegarde.
13. GitHub publiera le site.

---

## 11) Ce que cette version apporte vraiment

* Une identité HeliosAstro plus nette et plus premium
* Un fond vivant avec étoiles et halos
* Une section photonique animée
* Une section logiciel avec orbites visuelles
* Une cohérence graphique forte sur toutes les pages
* Une base propre pour ajouter ensuite PayPal, export PDF, formulaire avancé ou version expert

---

## 12) Suite logique

Prochaine étape utile :

* brancher un vrai formulaire de contact
* ajouter PayPal
* ajouter export PDF des prestations
* intégrer une vraie roue astrologique interactive HeliosAstro

Ce socle est prêt pour ça.
