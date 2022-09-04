import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    css: {
      preprocessorOptions: {
        less: {}
      }
    },
    plugins: [
      vue(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
        imports: ['vue', 'vue-router'],
        resolvers: [AntDesignVueResolver()]
      }),

      Components({
        resolvers: [
          AntDesignVueResolver({
            // 自动引入ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
            resolveIcons: true
          })
        ]
      })
    ],

    base: loadEnv(mode, process.cwd()).VITE_BASE_URL,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    server: {
      port: '8080'
    },

    build: {
      outDir: 'varside'
    }
  })
}
