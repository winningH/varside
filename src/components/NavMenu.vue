<template>
  <header class="site-head">
    <div class="home" @click="changeRouter('home')">
      <img class="home-svg" src="../assets/home.svg" alt="home" />
      <span class="home-text"> <i>wo</i></span>
    </div>
    <a-menu
      :selectedKeys="settingStore.menu"
      mode="horizontal"
      @select="({ key }) => changeRouter(key)"
    >
      <a-menu-item key="component">{{ $t('comp') }}</a-menu-item>
      <a-menu-item key="note">{{ $t('note') }}</a-menu-item>
      <a-menu-item key="animation">{{ $t('animation') }}</a-menu-item>
    </a-menu>

    <div class="lang-radio">
      <a-radio-group size="small" v-model:value="lang" @change="changeLang">
        <a-radio-button value="zh">{{ $t('zh') }}</a-radio-button>
        <a-radio-button value="en">{{ $t('en') }}</a-radio-button>
      </a-radio-group>
    </div>

    <div>
      欢迎：
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{ userStore.userName }}
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="https://github.com/winningH" target="_blank">
                {{ $t('person') }} <github-outlined />
              </a>
            </a-menu-item>
            <a-menu-item @click="logout" key="login">
              {{ $t('logout') }} <logout-outlined />
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </header>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store/user'
  import { useSettingStore } from '@/store/setting'
  import { useClearStore } from '@/store/clear'

  defineOptions({
    name: 'NavMenu'
  })

  const router = useRouter()
  const settingStore = useSettingStore()
  const lang = ref(settingStore.lang)
  const userStore = useUserStore()
  const clear = useClearStore()

  const changeRouter = path => {
    router.push(`/${path}`)
  }

  const changeLang = () => {
    settingStore.changeLanguage(lang.value)
  }

  const logout = () => {
    clear.clearAllStore()
    router.replace('/login')
  }
</script>

<style lang="less" scoped>
  .site-head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60px;
    min-width: 1000px;
    padding: 0 30px;
    box-shadow: 0 28px 50px #f0f1f2;
    display: flex;
    align-items: center;
    background-color: #fff;

    .home {
      cursor: pointer;
    }
    .home-svg {
      height: 3em;
    }
    .home-text {
      margin-left: 10px;
      font-size: 26px;
      font-weight: 400;
      color: rgb(204, 77, 98);
      vertical-align: middle;
    }

    .ant-menu-horizontal {
      line-height: 60px;
      border-bottom: none;
      flex: 1;
      margin: 0 20px;
    }
    .lang-radio {
      margin-right: 30px;
    }
  }
</style>
