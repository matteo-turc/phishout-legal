import { site } from '../data/site.js'

// Enveloppe commune à chaque page : titre, chapeau, contenu, date de MAJ.
export default function Page({ title, lead, children }) {
  return (
    <article className="page">
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
      <p className="updated">Dernière mise à jour : {site.lastUpdated}</p>
    </article>
  )
}
