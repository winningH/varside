import { defineStore } from 'pinia'

export const useLoginStore = defineStore('counter', {
  state: () => ({ userName: '', loginTime: null }),

  getters: {
    isLogin: state => {
      let now = Date.now()
      let hour = 60 * 60 * 1000
      return now - state.loginTime <= hour
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
