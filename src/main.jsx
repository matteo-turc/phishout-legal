import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Support from './pages/Support.jsx'
import Terms from './pages/Terms.jsx'
import Credits from './pages/Credits.jsx'
import './styles.css'

// HashRouter : les routes vivent après le « # » (ex. /#/confidentialite).
// C'est ce qui rend le site fonctionnel sur GitHub Pages sans configuration
// de redirection 404.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/conditions" element={<Terms />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  </React.StrictMode>,
)
