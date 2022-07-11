import Cookie from 'cookie'

export const getters = {
    authenticated(state) {
      return state.auth.loggedIn
    },

    user(state) {
      return state.auth.user
    }
  }



export const actions = {
  async nuxtServerInit ({ commit,dispatch }, { req }) {
    let auth = null
    const cookies = Cookie.parse(req.headers.cookie || '')
    const token = cookies['jwt'] || ''
    if (req.headers.cookie) {
      // cookie found
      try {
        // check data user login with cookie
        const { data } = await this.$axios.post('/api/auth/user')
        dispatch('user/load', token)
        // server return the data is cookie valid loggedIn is true
        auth = data.data // set the data auth
      } catch (err) {
        // No valid cookie found
        auth = null
      }
    }
    this.$auth.setUser(auth) // set state auth
  },
}