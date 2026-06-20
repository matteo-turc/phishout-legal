// Source unique de vérité pour toutes les valeurs affichées sur le site.
// Modifie ici (et nulle part ailleurs) pour mettre à jour les 3 pages.
export const site = {
  appName: 'PhishOut',
  editor: 'Turc Mattéo',
  email: 'turc.matteo.dev@gmail.com',
  country: 'France',
  lastUpdated: '20 juin 2026',
  minAge: 13,

  // Hébergeur (mentions légales, droit français / LCEN).
  host: {
    name: 'GitHub Pages (GitHub, Inc.)',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  },

  // Achats intégrés (gérés par Apple / StoreKit).
  iap: {
    monthly: '1,99 €/mois',
    lifetime: '4,99 €',
  },

  // URLs publiques (à renseigner dans App Store Connect).
  urls: {
    base: 'https://matteo-turc.github.io/phishout-legal/',
    privacy: 'https://matteo-turc.github.io/phishout-legal/#/confidentialite',
    support: 'https://matteo-turc.github.io/phishout-legal/#/support',
    terms: 'https://matteo-turc.github.io/phishout-legal/#/conditions',
  },
}

export const mailto = (subject) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
