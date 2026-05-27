import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import babelPlugin from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react"
  }),
  babelPlugin({
    plugins: ["@emotion/babel-plugin"]
  })
],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  }
})
