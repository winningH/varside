import { defineStore } from 'pinia'

export const useLoginStore = defineStore('counter', {
  state: () => ({ userName: '', loginTime: null }),

  getters: {
    isLogin: state => {
      let now = Date.now()
      return now - state.loginTime >= 60000
    }
  },

  actions: {
    saveUserInfo(userName) {
      this.userName = userName
    },

    saveLoginTime(time) {
      this.loginTime = time
    }
  },

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, key: 'login' }]
  }
})
