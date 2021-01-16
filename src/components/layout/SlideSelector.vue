<template>
  <div id="selector" >
    <div @click="changeSlide(item)" v-for="item in total" :key="item"  :class="isActive(item)" />
  </div>
</template>

<script>
  export default {
    name: 'SlideSelector',

    props: {
      index: {
        type: Number,
        default: 0,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    methods: {
      isActive(item) {
        return item - 1 === this.index ? 'active' : '';
      },

      changeSlide(item) {
        this.$emit('changeSlide', item - 1);
      }
    }
  }
</script>

<style scoped>
  div#selector {
    width: 4.51vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  div#selector div{
    width: 2px;
    height: 20px;
    margin-bottom: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  div#selector div.active {
    background-color: #000 !important;
  }
</style>