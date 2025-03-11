<template>
  <div class="background">
    <div class="title">
      <h2>BRAVO, VOUS ÊTES CONNECTÉE !!!</h2>
      <h5>ALLEZ MAINTENANT 20/20 :D</h5>
  </div>
  </div>
</template>

<script>
export default {
  name:"HomeUserView"
}
</script>

<style scoped>
.background {
  background-image: url("https://i.gifer.com/origin/16/162b41786d99b9d7e7b03549c4e19ae2_w200.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex: 1; /* Remplit l'espace restant */
  display: flex; /* Permet de bien gérer le dimensionnement */
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>