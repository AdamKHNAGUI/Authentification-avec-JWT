<template>
  <div>
    <form @submit.prevent="signin">
      <h3>Sign In</h3>
      <fieldset>
        <div class="form-inputs">
          <label for="email">Email :</label>
          <input id="email" type="text" v-model="user.emailId" required>
        </div>
        <div class="form-inputs">
          <label for="password">Password :</label>
          <input id="password" type="password" v-model="user.password" required>
        </div>
        <button type="submit">Log in</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: 'SignInForm',
  data() {
    return{
      user: {
        emailId:"",
        password:""
      }
    }
  },
  components: {},
  methods: {
    ...mapActions(['loginUserToStore']),
    ...mapMutations(['setAuthState']),

    async signin(){
      try {

        const response = await this.loginUserToStore(this.user);
        if (response.error !== 1) {
          this.setAuthState(true)
          await this.$router.push({name: "homeuser"});
          alert("Connexion réussite");
        } else {
          alert("Connexion Refusée");
        }

      } catch (err) {
        console.error("LoginView.vue | Erreur lors de la connection", err);
      }
    }
  }
}
</script>

<style scoped>
div {
  margin: auto;
}

form {
  border: 2px solid var(--grisFonce);
  border-radius: 15px;
  padding: 20px;

}

form fieldset{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-top: 10px;
  border: none;
}

.form-inputs {
  display: flex;
  flex-direction: column;
}

button {
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: var(--grisFonce);
  color:var(--blancPur);
  font-weight: bolder;
}

button:hover {
  background-color: var(--vert);
}
</style>