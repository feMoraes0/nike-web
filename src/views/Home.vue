<template>
  <div id="homepage">
    <Header />
    <SlideSelector :index=index :total=contents.length v-on:changeSlide="changeSlide($event)" />
    <Content :contents=contents :index=index />
  </div>
</template>

<script>
  import Header from '../components/layout/Header.vue';
  import Content from '../components/layout/Content.vue';
import SlideSelector from '../components/ui/SlideSelector.vue';

  export default {
    name: 'Home',
    components: {
      Content,
      Header,
      SlideSelector,
    },

    data() {
      return {
        index: 0,
        contents: [
          {
            title: 'Nike Lebron 17',
            text: 'A large Max Air unit in heel <br/>and <strong>Zoom Air</strong> technology <br/>under the forefoot',
            images: ['shoe-01']
          },
          {
            title: 'Feel strong like Lebron',
            text: 'The LeBron 17 LMTD features a large <strong>Max Air</strong> unit in the heel and Zoom Air cushioning for extra <strong>comfort</strong>. </br></br> Knit material wraps your feet for <strong>lightweight</strong> support so you can make quick, powerful moves like a champ.',
            images: ['shoe-02','shoe-03']
          }
        ]
      }
    },

    methods: {
      changeSlide(item) {
        this.index = item;
      }
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
  box-sizing: border-box;
  overflow: hidden !important;
}

#homepage {
  height: 100vh;
  width: 100vw;
  background-color: var(--background-colour);
  
}
</style>
