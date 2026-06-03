import { defineConfig, esmExternalRequirePlugin } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     esmExternalRequirePlugin({
      external: [/^node:/],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
