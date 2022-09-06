import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({ userName: '', lastLogin: null }),

  getters: {
    loginTime: state => {
      return new Date(state.lastLogin).getTime()
    },

    isLogin() {
      let now = Date.now()
      let hour = 60 * 60 * 1000
      return now - this.loginTime <= 2 * hour
    }
  },

  actions: {
    saveUserInfo(val) {
      this.userName = val.userName
      this.lastLogin = val.lastLogin
    }
  },

  persist: { storage: localStorage, key: 'login' }
})
