import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      bulma: `${path.resolve(__dirname, '../node_modules/bulma')}`
    }
  },
  publicDir: path.resolve(__dirname, './public'),
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['./node_modules/bulma/bulma']
      }
    }
  },
  server: {
    port: 8080
  },
  build: {
    rollupOptions: {
      external: ['axios', '@okta/okta-vue', '@okta/okta-auth-js']
    }
  }
})
