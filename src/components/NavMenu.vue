<template>
  <header class="site-head">
    <div class="home" @click="changeRouter('home')">
      <img class="home-svg" src="../assets/home.svg" alt="home" />
    </div>
    <a-menu
      v-model:selectedKeys="settingStore.menu"
      mode="horizontal"
      @select="({ key }) => changeRouter(key)"
    >
      <a-menu-item key="component">组件</a-menu-item>
      <a-menu-item key="note">笔记</a-menu-item>
      <a-menu-item key="animation">动画</a-menu-item>
    </a-menu>

    <div>
      欢迎：
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{ userStore.userName }}
        </a>
        <template #overlay>
          <a-menu @click="({ key }) => changeRouter(key)">
            <a-menu-item>
              <a href="https://github.com/winningH" target="_blank">个人中心 <github-outlined /></a>
            </a-menu-item>
            <a-menu-item key="login">退出 <logout-outlined /></a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </header>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { useUser } from '@/store/user'
  import { useSetting } from '@/store/setting'

  defineOptions({
    name: 'NavMenu'
  })

  const router = useRouter()
  const settingStore = useSetting()
  const userStore = useUser()

  const changeRouter = path => {
    if (!path) return
    router.push(`/${path}`)
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

    .home {
      cursor: pointer;
    }
    .home-svg {
      height: 3em;
    }

    .ant-menu-horizontal {
      line-height: 60px;
      border-bottom: none;
      flex: 1;
      margin: 0 20px;
    }
  }
</style>
