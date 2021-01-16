<template>
  <footer>
    <div class="icons">
      <img src="../../assets/icons/info.svg" alt="info">
      <img src="../../assets/icons/delivery.svg" alt="info">
      <p>
        4.7
        <img src="../../assets/icons/star.svg" alt="info">
      </p>
    </div>
    <form>
      <select>
        <option value="EU 43">EU 43</option>
        <option value="EU 43">EU 42</option>
      </select>
      <div>
        <button>Add to basket</button>
        <p>$ 249</p>
      </div>
    </form>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  footer form {
    margin-right: 6.59vw;
    margin-bottom: calc(8.3vh - 10px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  footer form select {
    width: 19.58vw;
    border-radius: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px;
  }

  footer form select option {
    font-size: 16px;
    font-weight: 500;
  }

  footer form div {
    display: flex;
    flex-direction: row;
    margin-top: 22px;
    justify-content: flex-start;
    align-items: center;
  }

  footer form div button {
    padding: 25px 33px;
    border-radius: 35px;
    background-color: #FFFFFF;
    border: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19.5px;
    color: var(--text-colour);
    margin-right: 2.70vw;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.141882);
    margin-bottom: 10px;
    cursor: pointer;
  }

  footer form div p {
    font-size: 30px;
    line-height: 38px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 1.15px;
    color: var(--text-colour);
  }

  footer div.icons {
    margin-left: 11.1vw;
    margin-bottom: 11.1vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 0.5;
  }

  footer div.icons img:first-child {
    margin-right: 1.74vw;
  }

  footer div.icons p {
    margin-left: 1.74vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
  }

  footer div.icons p img {
    margin-left: 3px;
  }
</style>