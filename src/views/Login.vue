<template>
  <div class="login-page">
    <div class="title login-button">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <h1>欢迎</h1>
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <a-form :model="user" :rules="userRules" :label-col="{ style: 'width: 60px' }">
      <a-form-item v-bind="validateInfos.account" label="账号">
        <a-input v-model:value="user.account" :maxlength="8" allowClear></a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password" label="密码">
        <a-input-password v-model:value="user.password" allowClear @pressEnter="login"></a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button class="login-button" type="primary" @click="login" :loading="loading">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
  // unplugin-auto-import 插件自动引入了 useRouter, ref, reactive
  import { Form, message } from 'ant-design-vue'
  import { useLoginStore } from '@/store/login'

  defineOptions({
    name: 'Login'
  })

  const useForm = Form.useForm

  const user = reactive({
    account: '',
    password: ''
  })
  const userRules = reactive({
    account: [{ required: true, message: '请输入账号' }],
    password: [{ required: true, message: '请输入密码' }]
  })

  const { validate, validateInfos } = useForm(user, userRules)

  const loading = ref(false)
  const router = useRouter()

  const loginStore = useLoginStore()

  const login = async () => {
    try {
      let res = await validate()
      const { account, password } = res
      loading.value = true
      setTimeout(() => {
        if (password !== 'admin') {
          message.error('账号或密码错误，请重试')
          loading.value = false
          return
        }
        loading.value = false
        loginStore.saveLoginTime(Date.now())
        loginStore.saveUserInfo(account)
        router.replace('/')
      }, 600)
    } catch (error) {}
  }
</script>

<style lang="less" scoped>
  .login-page {
    width: 300px;
    margin: 200px auto 0;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  .login-button {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  @media (max-width: 575px) {
    .login-button {
      width: 100%;
      margin-left: 0;
    }
  }
</style>
