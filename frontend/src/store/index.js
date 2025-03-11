import Vue from 'vue'
import Vuex from 'vuex'

import UsersService from '@/services/user.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:JSON.parse(sessionStorage.getItem("currentUserToken")) || null,
    isAuthenticated: !!sessionStorage.getItem("currentUserToken"), //force le stockage sous un booléen selon le sessionstorage

  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.currentUser

  },
  mutations: {
    updateCurrentUserToken(state, data) {
      console.log("currentuser",data)
      if (data) {
        sessionStorage.setItem("currentUserToken", JSON.stringify(data));
      } else {
        sessionStorage.removeItem("currentUserToken");
      }
    },
    setNameCurrentUser(state,data){
      console.log("nameuser",data)
      state.currentUser = data;
    },
    setAuthState(state, status) {
      state.isAuthenticated = status;
    }
  },
  actions: {
    async loginUserToStore({commit},data){
      try {
        let response = await UsersService.loginUser(data);

        if (response.error !== 1) {
          commit('updateCurrentUserToken', response);
          commit('setNameCurrentUser',response)
        }
        return response;
      } catch (error) {
        console.error('store.js | Erreur lors de la connexion:', error);
        return { error: 1, data: 'Erreur lors de la connexion' };
      }
    },
    async disconnectUser({commit}){
      commit('updateCurrentUserToken', null);
      commit('setNameCurrentUser',null)
      commit('setAuthState',false);
    },
    async RegisterUserToStore({commit},data){
      try {
        console.log("0",data)
        let response = await UsersService.registerUser(data);

        if (response.error !== 1) {
          commit('setAuthState',false);
          console.log("register :D")
        }
        return response;
      } catch (error) {
        console.error('store.js | Erreur lors de la création du compte:', error);
        return { error: 1, data: 'Erreur lors de la création du compte' };
      }
    }
  }
})
