import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { site, mailto } from '../data/site.js'

export default function Support() {
  return (
    <Page
      title="Support"
      lead="Besoin d'aide avec PhishOut ? Vous trouverez ici les réponses aux questions les plus fréquentes, ainsi que notre contact."
    >
      <h2>Nous contacter</h2>
      <p>
        Pour toute question, suggestion ou problème, écrivez-nous à{' '}
        <a href={mailto('Support PhishOut')}>{site.email}</a>. Nous répondons
        dans la mesure du possible sous quelques jours ouvrés. Précisez votre
        modèle d'iPhone et votre version d'iOS, cela nous aide à vous aider.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Comment analyser un message&nbsp;?</h3>
      <p>
        Copiez le texte du message suspect et collez-le dans PhishOut, ou
        importez une capture d'écran : l'app en extrait le texte sur l'appareil,
        puis affiche un verdict et les signaux détectés.
      </p>

      <h3>L'app fonctionne-t-elle hors ligne&nbsp;?</h3>
      <p>
        Oui. Toute l'analyse se fait localement sur votre appareil. PhishOut
        n'a besoin d'aucune connexion Internet pour fonctionner.
      </p>

      <h3>Mes messages sont-ils envoyés quelque part&nbsp;?</h3>
      <p>
        Non. Ni le texte, ni les images, ni les résultats ne quittent votre
        appareil. Voir la <Link to="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h3>Gérer ou annuler mon abonnement</h3>
      <p>
        L'abonnement ({site.iap.monthly}) et l'achat à vie ({site.iap.lifetime})
        sont gérés par Apple. Pour gérer ou annuler un abonnement :{' '}
        <em>Réglages iOS &gt; votre nom &gt; Abonnements</em>. L'annulation prend
        effet à la fin de la période en cours.
      </p>

      <h3>Demander un remboursement</h3>
      <p>
        Les remboursements sont traités exclusivement par Apple. Rendez-vous sur{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
          reportaproblem.apple.com
        </a>{' '}
        et connectez-vous avec votre identifiant Apple.
      </p>

      <h3>Restaurer mes achats</h3>
      <p>
        Si vous changez d'appareil ou réinstallez l'app, utilisez le bouton
        « Restaurer les achats » dans PhishOut. Vos achats sont rattachés à
        votre identifiant Apple.
      </p>

      <h3>Supprimer mon historique</h3>
      <p>
        L'historique est stocké uniquement sur votre appareil. Vous pouvez
        supprimer une analyse depuis l'écran Historique, ou tout effacer en
        désinstallant l'application.
      </p>

      <h3>PhishOut s'est trompé sur un message</h3>
      <p>
        PhishOut est un outil d'aide à la décision : ses résultats sont
        indicatifs et peuvent comporter des erreurs, dans un sens comme dans
        l'autre. Ne fondez jamais une décision uniquement sur l'app. Voir
        l'avertissement dans les{' '}
        <Link to="/conditions">conditions d'utilisation</Link>.
      </p>
    </Page>
  )
}
