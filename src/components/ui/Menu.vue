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
    
  }
</script>

<style scoped>
  div#menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div#menu p {
    font-size: 16px;
    line-height: 20px;
    font-style: normal;
    color: var(--text-colour);
  }
  
  div#menu p, div#menu img {
    margin: 0px 23px;
  }

  div#menu p.active {
    font-weight: bold;
  }

</style>