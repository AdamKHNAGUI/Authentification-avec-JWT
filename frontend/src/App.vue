<template>
  <div class="app">
    <header>
      <div v-if="!isAuthenticated">
        <router-link :to="{ name: 'home' }">
          <button>HOME</button>
        </router-link>
      </div>
      <div v-else>
        <router-link :to="{ name: 'homeuser' }">
          <button>HOME</button>
        </router-link>
      </div>
      <h1>Mini-projet 2 : Authentification avec JWT (JSON Web Token)</h1>
      <div class="sign">
        <div v-if="isAuthenticated" class="login-state">
          <em>connecté en tant que <b>{{currentUser.firstName}} {{currentUser.lastName}}</b></em>
          <button @click="logout">LOG OUT</button>
        </div>
        <div v-else>
          <router-link :to="{ name: 'signin' }">
            <button>SIGN IN</button>
          </router-link>
          <router-link :to="{ name: 'signup' }">
            <button>SIGN UP</button>
          </router-link>
        </div>
      </div>
    </header>
    <router-view/>
    <footer>
      <div>
        <p>Adam <b>KHNAGUI</b></p>
        <p>Lucas <b>FULCRAND</b></p>
      </div>
      <div>
        <b>on mérite le 20/20 sah</b>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(['isAuthenticated','currentUser'])
  },
  methods: {
    ...mapActions(['disconnectUser']),
    ...mapMutations(['setAuthState']),
    async logout() {
      this.disconnectUser()
      this.$router.push({name: "home"});

      this.$forceUpdate()
    }
  }, mounted() {
    console.log("sessionstorage",sessionStorage.getItem("currentUserToken"))
    console.log("isAuth",this.isAuthenticated)
    console.log("currentUser",this.currentUser)
    if (this.isAuthenticated){
      console.log("show name")
    }
  }
}
</script>

<style scoped>
header, footer {
  background-color: var(--bleuMarine);
  padding: 15px;
  color: var(--blancPur);
  display: flex;
  justify-content: space-between;
}

.sign {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

button {
  padding: 10px;
  border-radius: 15px;
  border: 2px var(--grisFonce) solid;
  background-color: var(--bleuClair);
  color: var(--blancPur);
  font-weight: bolder;
}

button:hover {
  transform: scale(1.1);
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

header {
  flex-shrink: 0;
}

footer {
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
}

router-view {
  flex: 1;
  display: flex;
}

.login-state {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
