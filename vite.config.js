import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site de projet GitHub Pages : https://matteo-turc.github.io/phishout-legal/
// `base` DOIT correspondre au nom du repo, sinon le CSS/JS ne se charge pas.
// Si tu passes un jour sur un domaine perso (ex. phishout.app), remets base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/phishout-legal/',
})
