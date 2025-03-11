<template>
  <div>
    <form @submit.prevent="signup">
      <h3>Sign Up</h3>
      <fieldset>
        <div class="form-inputs">
          <label for="firstname">FirstName :</label>
          <input id="firstname" type="text" v-model="user.firstName" required>
        </div>
        <div class="form-inputs">
          <label for="lastName">LastName :</label>
          <input id="lastName" type="text" v-model="user.lastName" required>
        </div>
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
import {mapActions} from "vuex";

export default {
  name: 'SignUpForm',
  data() {
    return{
      user: {
        firstName:"",
        lastName:"",
        emailId:"",
        password:""
      }
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['RegisterUserToStore']),
    async signup(){

      try {
        console.log(this.user)
        const response = await this.RegisterUserToStore(this.user);
        if (response.error !== 1) {
          // console.log("register",response)
          // sessionStorage.setItem("currentUserToken", response.data);
          // this.updateCurrentUser(response.data);
          // await this.$router.push({name: "home"});
          alert("Création du compte réussite");
        } else {
          alert("Création du compte Refusée");
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