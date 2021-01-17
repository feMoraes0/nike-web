<template>
  <section>
    <div class="text">
      <h1>{{ this.content.title }}</h1>
      <h5 v-html=this.content.text></h5>
    </div>
    <div class="images">
      <img
        class="content-image"
        :class="getImageClass(content.images.length)"
        v-for="image in this.content.images"
        :key="content.images.indexOf(image)"
        :src="getImage(image)"
        :alt="image"
      >
    </div>
  </section>
</template>

<script>
  import Animation from '../../helpers/Animation';

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
        return this.contents[this.index];
      },
    },

    methods: {
      getImage(image) {
        return require( `../../assets/images/${image}.png`);
      },

      getImageClass(quantity) {
        return quantity === 1 ? 'single-child' : 'multi-child';
      },

      handleAnimations() {
        const textBox = document.getElementsByClassName('text');
        const images = document.getElementsByClassName('content-image');
        let imageAnimations = [Animation.BOTTOM_UP, Animation.TOP_DOWN];

        if ( images.length === 2 ) {
          imageAnimations = imageAnimations.reverse();
        }

        if( Array.isArray(textBox) && Array.isArray(images) ) {
          Animation.animate(textBox[0], Animation.BOTTOM_UP);

          images.forEach((image, index) => {
            const animation = imageAnimations[index];
            Animation.animate(image, animation);
          })
        }
      }
    },

    mounted() {
      this.handleAnimations();
    },

    updated() {
      this.handleAnimations()
    }
  }
</script>

<style scoped>
  @import "../../helpers/Animation/style.css";

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

  section div.images img.single-child {
    width: 48.8vw;
    position: absolute;
    right: 10.76vw;
    bottom: 17vh;
  }

  section div.images img.multi-child {
    position: absolute;
    width: 48.8vw;
    z-index: 2;
  }

  section div.images img.multi-child:first-child {
    position: absolute;
    width: 48.8vw;
    top: -2.5vh;
    right: 4.17vw;
  }

  section div.images img.multi-child:last-child {
    position: absolute;
    width: 48.8vw;
    bottom: -2.5vh;
    right: 24.51vw;
  }
</style>