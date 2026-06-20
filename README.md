# PhishOut — Pages légales

Site statique (React + Vite) regroupant les pages **Confidentialité**, **Support**
et **Conditions d'utilisation** de l'application PhishOut, hébergé sur GitHub Pages.

## URLs publiques (à renseigner dans App Store Connect)

- **Confidentialité :** `https://matteo-turc.github.io/phishout-legal/#/confidentialite`
- **Support :** `https://matteo-turc.github.io/phishout-legal/#/support`
- **Conditions :** `https://matteo-turc.github.io/phishout-legal/#/conditions`

> Les routes vivent après le `#` (HashRouter) : c'est ce qui rend le site
> fonctionnel sur GitHub Pages sans configuration de redirection 404.

## Développer en local

```bash
npm install
npm run dev      # http://localhost:5173/phishout-legal/
```

## Déploiement (automatique via GitHub Actions)

1. Créer un repo GitHub **public** nommé exactement `phishout-legal` sous le
   compte `matteo-turc`, puis y pousser ce dossier :

   ```bash
   git init
   git add .
   git commit -m "Pages légales PhishOut"
   git branch -M main
   git remote add origin https://github.com/matteo-turc/phishout-legal.git
   git push -u origin main
   ```

2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

3. Chaque push sur `main` build et déploie automatiquement (workflow
   `.github/workflows/deploy.yml`). Le site sera en ligne sur
   `https://matteo-turc.github.io/phishout-legal/`.

## Modifier le contenu

Toutes les valeurs (nom, e-mail, dates, prix, hébergeur…) sont centralisées dans
[`src/data/site.js`](src/data/site.js). Les textes des pages sont dans
[`src/pages/`](src/pages/).

## Changer de nom de repo ou passer à un domaine perso

- Repo différent → adapter `base` dans [`vite.config.js`](vite.config.js).
- Domaine perso (ex. `phishout.app`) → mettre `base: '/'`, ajouter un fichier
  `public/CNAME` contenant le domaine, et mettre à jour les URLs dans `site.js`.
