import Page from '../components/Page.jsx'

export default function Credits() {
  return (
    <Page
      title="Crédits et licences"
      lead="PhishOut s'appuie sur des composants open source. Voici les attributions et licences correspondantes."
    >
      <h2>Modèle d'analyse</h2>
      <p>
        Le moteur de détection utilise un modèle dérivé de{' '}
        <strong>DistilBERT multilingue</strong> (<code>distilbert-base-multilingual-cased</code>),
        publié par Hugging Face sous licence <strong>Apache License 2.0</strong>.
      </p>
      <p>
        Copyright Hugging Face et les auteurs de DistilBERT. Distribué sous la licence
        Apache 2.0 ; le texte complet de la licence est disponible ici :{' '}
        <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer">
          apache.org/licenses/LICENSE-2.0
        </a>. Le modèle a été affiné (fine-tuning) par l'éditeur de PhishOut pour la
        détection d'hameçonnage ; il s'agit d'une œuvre dérivée.
      </p>

      <h2>Liste de domaines</h2>
      <p>
        La liste de domaines légitimes utilisée par l'analyseur d'URL s'appuie en partie
        sur le classement <strong>Tranco</strong> (
        <a href="https://tranco-list.eu" target="_blank" rel="noreferrer">tranco-list.eu</a>),
        un classement de recherche des sites les plus populaires.
      </p>
      <p>
        Référence : V. Le Pochat, T. Van Goethem, S. Tajalizadehkhoob, M. Korczynski,
        W. Joosen, « Tranco: A Research-Oriented Top Sites Ranking Hardened Against
        Manipulation », NDSS 2019.
      </p>

      <h2>Confidentialité</h2>
      <p>
        Aucun de ces composants n'introduit de collecte de données : tout fonctionne
        hors ligne, sur l'appareil. Voir la politique de confidentialité.
      </p>
    </Page>
  )
}
