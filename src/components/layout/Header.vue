<template>
  <header>
    <Logo />
    <Menu />
    <a href="/">
      <img src="../../assets/icons/basket.svg" /> 
    </a>
  </header>
</template>

<script>
  import Logo from '../ui/Logo.vue';
  import Menu from '../ui/Menu.vue';
  
  export default {
    name: 'Header',
    components: {
      Logo,
      Menu,
    }
  }
</script>

<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 44px;
}

</style>