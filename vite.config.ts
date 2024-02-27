import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@icons': fileURLToPath(
        new URL(
          './node_modules/@shopify/polaris-icons/dist/svg',
          import.meta.url
        )
      ),
      '@src': path.resolve(__dirname, 'src')
    },
    dedupe: ['vue']
  },

  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**']
    }
  }
}))
