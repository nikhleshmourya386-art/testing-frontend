import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
server:{
  proxy:{
    '/api':'https://vercel.com/nikhleshmourya386-arts-projects'
  }
},

  plugins: [react()],
})
