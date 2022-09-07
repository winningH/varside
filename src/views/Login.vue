<template>
  <div class="login-page">
    <div class="title login-button">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <h1>{{ $t('welcome') }}</h1>
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <a-form :model="user" :rules="userRules" :label-col="{ style: 'width: 90px' }">
      <a-form-item v-bind="validateInfos.userName" :label="$t('account')">
        <a-input v-model:value="user.userName" :maxlength="8" allowClear></a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password" :label="$t('password')">
        <a-input-password
          v-model:value="user.password"
          allowClear
          @pressEnter="login"
        ></a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button class="login-button" type="primary" @click="login" :loading="loading">
          {{ $t('login') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
  // unplugin-auto-import 插件自动引入了 useRouter, ref, reactive
  import { Form, message } from 'ant-design-vue'
  import { useUserStore } from '@/store/user'
  import { formatDate } from '@/utils'
  import { useI18n } from 'vue-i18n'

  defineOptions({
    name: 'Login'
  })

  const { t } = useI18n()
  const useForm = Form.useForm
  const user = reactive({
    userName: '',
    password: ''
  })
  const userRules = reactive({
    userName: [{ required: true, message: t('errorAccount') }],
    password: [{ required: true, message: t('errorPassword') }]
  })
  const { validate, validateInfos } = useForm(user, userRules)

  const loading = ref(false)
  const router = useRouter()
  const userStore = useUserStore()

  const login = async () => {
    try {
      let res = await validate()
      const { userName, password } = res
      loading.value = true
      setTimeout(() => {
        if (password !== 'admin') {
          message.error('账号或密码错误，请重试')
          loading.value = false
          return
        }
        loading.value = false
        userStore.saveUserInfo({
          userName,
          lastLogin: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
        })
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
    width: calc(100% - 90px);
    margin-left: 90px;
  }

  @media (max-width: 575px) {
    .login-button {
      width: 100%;
      margin-left: 0;
    }
  }
</style>
