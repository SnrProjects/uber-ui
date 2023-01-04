<template>
  <div>
    <HeaderComponent />
    <FooterComponent />
    Home
  </div>
</template>
  
<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  name: 'HomeComponent',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>
<style>
@import "../assets/styles/common-style.css";
</style>