<template>
  <div id="menu">
    <p>What's new</p>
    <p class="active">Men</p>
    <p>Women</p>
    <p>Kids</p>
    <p>Personalize</p>
    <p>Collections</p>
    <p>Sales</p>
    <img src="../../assets/icons/search.svg" alt="search">
  </div>
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style scoped>
  div#menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(250, 250, 250, 0.5);
    padding: 22px 2.01vw;
    border-radius: 31px;
  }

  div#menu p {
    font-size: 16px;
    line-height: 20px;
    font-style: normal;
    color: var(--text-colour);
  }
  
  div#menu p, div#menu img {
    margin: 0px 1.60vw;
    cursor: pointer;
  }

  div#menu p.active {
    font-weight: bold;
  }

</style>