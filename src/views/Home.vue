<template>
  <div id="homepage">
    <div id="foreground">
      <Header />
      <SlideSelector :index=index :total=contents.length v-on:changeSlide="changeSlide($event)" />
      <Footer />
    </div>
    <div class="background">
      <Content :contents=contents :index=index />
    </div>
  </div>
</template>

<script>
  import Header from '../components/layout/Header.vue';
  import Content from '../components/layout/Content.vue';
  import Footer from '../components/layout/Footer.vue';
  import SlideSelector from '../components/layout/SlideSelector.vue';

  export default {
    name: 'Home',
    components: {
      Content,
      Header,
      Footer,
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
      async changeSlide(item) {
        const textBox = document.getElementsByClassName('text')[0];
        const images = document.getElementsByClassName('content-image');
        let imageAnimations = ['animate-bottom-up-reverse', 'animate-up-bottom-reverse'];
        if (images.length === 2) {
          imageAnimations = imageAnimations.reverse();
        }

        this.animate(textBox, 'animate-bottom-up-reverse');
        images.forEach((image, index) => {
          const animation = imageAnimations[index];
          this.animate(image, animation);
        })

        await setTimeout(() => {
          this.index = item;
        }, 1000)

      },

      animate(element, animation) {
        element.classList.toggle(animation);
        setTimeout(() => {
          element.classList.toggle(animation);
        }, 1000);
      },
    },

    mounted() {
      const textBox = document.getElementsByClassName('text')[0];
      const image = document.getElementsByClassName('content-image')[0];
      const animation = 'animate-bottom-up';

      textBox.classList.toggle(animation);
      image.classList.toggle(animation);

      setTimeout(() => {
        textBox.classList.toggle(animation);
        image.classList.toggle(animation);
        console.log('removing animation...')
      }, 1000);
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

  #foreground {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 5;
    position: absolute;
  }

  #homepage div.background {
    z-index: 1;
  }



</style>
