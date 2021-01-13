<template>
  <div id="homepage">
    <Header />
  </div>
</template>

<script>
  import Header from '../components/layout/Header.vue';

  export default {
    name: 'Home',
    components: {
      Header,
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,700&display=swap');

:root {
  --background-colour: #FAFAFA;
  --text-colour: #000000;
  --button-background-colour: #FFFFFF;
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

#homepage {
  height: 100vh;
  width: 100vw;
  background-color: var(--background-colour);
}
</style>
