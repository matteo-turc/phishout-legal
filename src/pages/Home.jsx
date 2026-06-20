import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Home() {
  return (
    <article className="page">
      <h1>{site.appName}</h1>
      <p className="lead">
        Le détecteur d'arnaques et d'hameçonnage 100 % hors ligne. Vos messages
        sont analysés directement sur votre appareil — rien n'est jamais envoyé
        sur Internet.
      </p>

      <div className="cards">
        <Link className="card" to="/confidentialite">
          <h2>Politique de confidentialité</h2>
          <p>Comment vos données sont traitées (spoiler : elles ne quittent jamais votre appareil).</p>
        </Link>
        <Link className="card" to="/support">
          <h2>Support</h2>
          <p>Questions fréquentes, gestion des achats et contact.</p>
        </Link>
        <Link className="card" to="/conditions">
          <h2>Conditions d'utilisation</h2>
          <p>Conditions, avertissement important et limites de responsabilité.</p>
        </Link>
      </div>

      <div className="callout">
        <p>
          Une question&nbsp;? Écrivez-nous à{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </article>
  )
}
