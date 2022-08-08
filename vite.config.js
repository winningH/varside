import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            // 自动引入ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
            resolveIcons: true
          })
        ]
      })
    ],

    base: loadEnv(mode, process.cwd()).VITE_BASE_ROUTER,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    server: {
      port: '8000'
    }
  })
}
