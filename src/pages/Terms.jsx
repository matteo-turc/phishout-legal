import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { site } from '../data/site.js'

export default function Terms() {
  return (
    <Page
      title="Conditions d'utilisation et avertissement"
      lead="Les présentes conditions régissent l'utilisation de l'application PhishOut. En installant ou en utilisant l'application, vous les acceptez."
    >
      <div className="callout warning">
        <p>
          <strong>Avertissement important.</strong> {site.appName} est un{' '}
          <strong>outil d'aide à la décision</strong>, pas une garantie de
          sécurité. Ses résultats sont <strong>indicatifs et probabilistes</strong>
          {' '}: l'application peut se tromper, en signalant comme sûr un message
          dangereux (faux négatif) ou comme dangereux un message légitime (faux
          positif). <strong>Vous restez seul responsable de vos décisions</strong>
          {' '}(cliquer sur un lien, payer, appeler, communiquer des informations,
          faire confiance ou non à un message).
        </p>
      </div>

      <h2>1. Objet et acceptation</h2>
      <p>
        Les présentes conditions d'utilisation (les « Conditions ») encadrent
        votre usage de l'application {site.appName} éditée par {site.editor}. Si
        vous n'acceptez pas ces Conditions, n'utilisez pas l'application.
      </p>

      <h2>2. Description du service</h2>
      <p>
        {site.appName} aide à repérer des messages potentiellement frauduleux
        (hameçonnage, arnaques) en analysant, sur votre appareil, le texte ou la
        capture que vous lui soumettez. Elle s'appuie sur des règles heuristiques
        et un modèle d'intelligence artificielle embarqué, et restitue un score
        et des signaux explicatifs.
      </p>

      <h2>3. Nature de l'outil et absence de garantie</h2>
      <p>
        L'application est fournie « <strong>en l'état</strong> » et « selon
        disponibilité », sans garantie d'aucune sorte, expresse ou implicite,
        notamment quant à l'exactitude, l'exhaustivité, la fiabilité ou
        l'adéquation des résultats à un usage particulier.
      </p>
      <ul>
        <li>
          Les verdicts sont des <strong>estimations</strong> : ils ne constituent
          pas une certitude ni une expertise en sécurité informatique.
        </li>
        <li>
          L'application peut produire des <strong>faux négatifs</strong> et des{' '}
          <strong>faux positifs</strong>.
        </li>
        <li>
          {site.appName} <strong>ne remplace pas</strong> votre vigilance, ni les
          vérifications auprès des organismes officiels (banque, administration,
          marchand), ni un conseil professionnel (juridique, financier, sécurité).
        </li>
        <li>
          Aucune décision ne doit reposer <strong>uniquement</strong> sur
          l'application. En cas de doute, contactez directement l'organisme
          concerné par ses canaux officiels.
        </li>
      </ul>

      <h2>4. Limitation de responsabilité</h2>
      <p>
        Dans les limites permises par la loi applicable, {site.editor} ne saurait
        être tenu responsable des dommages directs ou indirects résultant de
        l'utilisation ou de l'impossibilité d'utiliser l'application, ou du fait
        de s'être fié à un résultat fourni par celle-ci — y compris, sans
        limitation, toute fraude subie, perte financière, perte de données ou
        préjudice de toute nature.
      </p>
      <p>
        Il vous appartient d'exercer votre propre jugement avant toute action.
        Rien dans les présentes Conditions n'a pour effet d'exclure ou de limiter
        la responsabilité de l'éditeur dans les cas où la loi ne le permet pas
        (notamment en cas de faute lourde ou dolosive, ou d'atteinte aux droits
        que la loi confère impérativement aux consommateurs).
      </p>

      <h2>5. Absence d'affiliation aux marques tierces</h2>
      <p>
        Les noms, marques et logos susceptibles d'apparaître dans les messages
        que vous analysez appartiennent à leurs propriétaires respectifs.{' '}
        {site.appName} n'est ni affiliée, ni partenaire, ni approuvée par ces
        marques ; elles ne sont mentionnées qu'à des fins de détection.
      </p>

      <h2>6. Achats intégrés</h2>
      <p>
        {site.appName} propose un abonnement ({site.iap.monthly}, renouvellement
        automatique) et un achat unique à vie ({site.iap.lifetime}). Ces achats
        sont traités et facturés par <strong>Apple</strong> via votre identifiant
        Apple. La gestion et l'annulation des abonnements se font dans les
        Réglages iOS ; les remboursements relèvent exclusivement d'Apple. Les
        conditions d'Apple s'appliquent à ces transactions.
      </p>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        L'application, son code, son modèle d'analyse, son design et ses contenus
        sont protégés et demeurent la propriété de {site.editor}. Vous bénéficiez
        d'un droit d'usage personnel et non exclusif. Sauf dans les limites
        autorisées par la loi, vous vous engagez à ne pas copier, modifier,
        distribuer, ni tenter de décompiler ou de désosser l'application.
      </p>

      <h2>8. Usage acceptable</h2>
      <p>
        Vous vous engagez à utiliser {site.appName} conformément à la loi et à sa
        finalité — un outil défensif d'aide à la détection d'arnaques — et à ne
        pas en détourner l'usage.
      </p>

      <h2>9. Disponibilité et mises à jour</h2>
      <p>
        L'application est fournie sans garantie de disponibilité continue. Des
        mises à jour peuvent être publiées pour l'améliorer, la corriger ou
        l'adapter ; certaines fonctionnalités peuvent évoluer ou être retirées.
      </p>

      <h2>10. Données personnelles</h2>
      <p>
        {site.appName} ne collecte aucune donnée personnelle. Pour les détails,
        consultez la <Link to="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h2>11. Apple</h2>
      <p>
        Apple n'est pas partie aux présentes Conditions et n'assume aucune
        responsabilité au titre de l'application. Apple et ses filiales sont
        toutefois bénéficiaires tiers de ces Conditions et peuvent s'en
        prévaloir. Le contrat de licence standard d'Apple (EULA) s'applique
        également à votre utilisation de l'application.
      </p>

      <h2>12. Modification des Conditions</h2>
      <p>
        Ces Conditions peuvent être mises à jour. La date de dernière mise à jour
        figure ci-dessous ; votre usage continu de l'application vaut acceptation
        de la version en vigueur.
      </p>

      <h2>13. Droit applicable et litiges</h2>
      <p>
        Les présentes Conditions sont régies par le droit français. En cas de
        litige, et à défaut de résolution amiable, les tribunaux français sont
        compétents, sous réserve des dispositions impératives protectrices des
        consommateurs. Conformément au droit de la consommation, vous pouvez
        recourir gratuitement à un médiateur de la consommation pour les litiges
        relevant de l'éditeur ; les litiges relatifs aux achats sont à adresser à
        Apple.
      </p>

      <h2>14. Mentions légales</h2>
      <ul>
        <li><strong>Éditeur :</strong> {site.editor} ({site.country}).</li>
        <li><strong>Contact :</strong> <a href={`mailto:${site.email}`}>{site.email}</a>.</li>
        <li>
          <strong>Hébergeur du site :</strong> {site.host.name}, {site.host.address}.
        </li>
      </ul>
    </Page>
  )
}
