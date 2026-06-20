import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { site } from '../data/site.js'

export default function Privacy() {
  return (
    <Page
      title="Politique de confidentialité"
      lead="Cette politique explique comment l'application PhishOut traite vos informations. En résumé : PhishOut fonctionne entièrement sur votre appareil et ne collecte, ne transmet et ne stocke aucune donnée sur un serveur."
    >
      <div className="callout">
        <p>
          <strong>L'essentiel :</strong> aucune donnée n'est collectée par
          l'éditeur. Tout est analysé et stocké localement sur votre appareil.
          Pas de compte, pas de serveur, pas de publicité, pas de pistage.
        </p>
      </div>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est {site.editor}, éditeur de
        l'application {site.appName} ({site.country}). Pour toute question
        relative à vos données : <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Notre principe : zéro collecte</h2>
      <p>
        {site.appName} est conçue pour fonctionner à 100 % hors ligne. L'analyse
        des messages s'effectue exclusivement sur votre appareil, grâce à un
        modèle d'intelligence artificielle embarqué et à des règles locales.
        Aucune information n'est transmise à l'éditeur ni à un quelconque tiers.
      </p>

      <h2>3. Quelles données et comment elles sont traitées</h2>
      <ul>
        <li>
          <strong>Texte ou capture d'écran analysé :</strong> traité en mémoire,
          sur l'appareil, le temps de produire le résultat. Pour les images, la
          reconnaissance de texte (OCR) est réalisée localement. Ce contenu
          n'est jamais envoyé sur Internet.
        </li>
        <li>
          <strong>Historique des analyses :</strong> stocké uniquement sur votre
          appareil (base de données locale), afin de vous permettre de retrouver
          vos résultats. Selon votre offre, l'historique peut être purgé
          automatiquement après une certaine durée.
        </li>
        <li>
          <strong>Réglages techniques :</strong> des préférences locales (par
          ex. votre quota quotidien, l'état de l'intro) sont conservées sur
          l'appareil. Elles ne contiennent aucune donnée personnelle identifiante
          et ne quittent pas l'appareil.
        </li>
      </ul>

      <h2>4. Ce que nous ne faisons pas</h2>
      <ul>
        <li>Aucun compte utilisateur, aucune inscription.</li>
        <li>Aucun serveur, aucun appel réseau, aucune télémétrie.</li>
        <li>Aucun cookie, aucun outil d'analyse d'audience.</li>
        <li>Aucune publicité, aucun identifiant publicitaire (IDFA).</li>
        <li>Aucun pistage entre applications ou sites tiers.</li>
        <li>Aucune revente ni partage de données : il n'y en a tout simplement pas.</li>
      </ul>

      <h2>5. Autorisations de l'appareil</h2>
      <p>
        Si vous choisissez d'analyser une capture d'écran, l'app accède à
        l'image que <em>vous</em> sélectionnez, uniquement pour en extraire le
        texte localement. {site.appName} ne demande pas l'accès à votre
        localisation, vos contacts, votre micro ou votre caméra.
      </p>

      <h2>6. Achats intégrés</h2>
      <p>
        Les abonnements et achats ({site.iap.monthly}, {site.iap.lifetime}) sont
        gérés par Apple via StoreKit. L'éditeur ne reçoit aucune donnée bancaire
        ni coordonnée de paiement. Le traitement de ces informations relève de la{' '}
        <a href="https://www.apple.com/legal/privacy/fr-ww/" target="_blank" rel="noreferrer">
          politique de confidentialité d'Apple
        </a>.
      </p>

      <h2>7. Conservation et suppression</h2>
      <p>
        Les données restant sur votre appareil, vous en gardez le contrôle total.
        Vous pouvez supprimer une analyse depuis l'historique, ou tout effacer en
        désinstallant l'application. Aucune copie n'est conservée ailleurs.
      </p>

      <h2>8. Vos droits (RGPD)</h2>
      <p>
        Le Règlement général sur la protection des données (RGPD) vous accorde
        des droits d'accès, de rectification, d'effacement, de limitation et de
        portabilité. Comme l'éditeur ne collecte ni ne détient aucune de vos
        données, vous exercez ces droits directement sur votre appareil
        (consultation, suppression de l'historique, désinstallation). Pour toute
        question, contactez-nous à{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Vous avez également le
        droit d'introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>

      <h2>9. Transferts hors Union européenne</h2>
      <p>
        Aucune donnée n'étant transmise hors de votre appareil, aucun transfert
        de données personnelles hors de l'Union européenne n'a lieu du fait de
        l'application.
      </p>

      <h2>10. Mineurs</h2>
      <p>
        {site.appName} s'adresse à un public âgé de {site.minAge} ans et plus.
        L'application ne collecte sciemment aucune donnée concernant des enfants,
        elle ne collecte aucune donnée du tout.
      </p>

      <h2>11. Modifications</h2>
      <p>
        Cette politique peut être mise à jour pour refléter des évolutions de
        l'application ou de la réglementation. La date de dernière mise à jour
        figure ci-dessous. Les changements importants seront signalés dans
        l'application ou sur cette page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Pour toute question relative à cette politique :{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Voir aussi nos{' '}
        <Link to="/conditions">conditions d'utilisation</Link>.
      </p>
    </Page>
  )
}
