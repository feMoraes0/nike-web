<template>
  <section>
    <div class="text">
      <h1>{{ this.content.title }}</h1>
      <h5 v-html=this.content.text></h5>
    </div>
    <div class="images" v-for="image in this.content.images" v-bind:key="image.lenght">
      <img class="single-element" src="../../assets/images/shoe-01.png" alt="Shoe">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Content',
    props: {
      contents: {
        type: Array,
        required: true,
      },
      index: {
        type: Number,
        default: 0,
      }
    },
    computed: {
      content() {
        console.log(this.contents[this.index].images);
        return this.contents[this.index]
      }
    }
  }
</script>

<style scoped>
  section {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  section div.text {
    width: 29.9vw;
    margin-left: 11vw;
    animation: hideShow 2s ease-in-out both;
  }

  section div.text h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 56px;
    line-height: 68px;
    color: var(--text-colour);
    margin-bottom: 32px;
  }

  section div.text h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: var(--text-colour);
    width: 19.5vw;
  }

  section div.images img.single-element {
    width: 48.8vw;
    transform: translate(-1.59vw, 0);
    animation: bottomUp 2s ease-in-out;
  }

  @keyframes hideShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bottomUp {
    0% {
      transform: translate(-1.59vw, 35vh);
      opacity: 0.3;
    }

    55% {
      transform: translate(-1.59vw, -2vh);
      opacity: 0.8;
    }

    80% {
      transform: translate(-1.59vw, 5vh);
      opacity: 1;
    }

    100% {
      transform: translate(-1.59vw, 0);
      opacity: 1;
    }
  }
</style>