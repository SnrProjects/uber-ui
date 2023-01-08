<template>
  <div class="footer_div">
    <div class="heading_div">
      <p class="mt-50 uber_text ">uber</p>
    </div>
    <div class="visit_help_center_div" @mouseover="color = 'white'" @mouseleave="color = 'black'">
      <p class="visit_help_center">Visit Help Center</p>
      <div class="line" :style="{ 'background-color': color }"></div>
    </div>

    <div class="main_div">
      <div class="div_1">
        <p :style="{ color: 'white', marginBottom: '15px' }"><strong>Company</strong></p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">About us</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Our offerings</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Newsroom</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Investors</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Blog</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Careers</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">AI</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Gift cards</p>

      </div>
      <div class="div_2">
        <p :style="{ color: 'white', marginBottom: '15px' }"><strong>Products</strong></p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Ride</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Drive</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Deliver</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Eat</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Uber for Business</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Uber Freight</p>

      </div>
      <div class="div_3">
        <p :style="{ color: 'white', marginBottom: '15px' }"><strong>Global citizenship</strong></p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Safety</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Diversity and Inclusion</p>

      </div>
      <div class="div_4">
        <p :style="{ color: 'white', marginBottom: '15px' }"><strong>Travel</strong></p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Airports</p>
        <p :style="{ color: 'white', marginBottom: '15px', fontSize: '14px' }">Cities</p>
      </div>
    </div>

    <div class="icon_div">
      <div class="icon_1">
        <v-img :src="facebook" width="20" height="20" ></v-img>
      </div>
      <div class="icon_1">
        <v-img :src="twitter" width="20" height="20" ></v-img>
      </div>
      <div class="icon_1">
        <v-img :src="youtube" width="20" height="20" ></v-img>
      </div>
      <div class="icon_1">
        <v-img :src="linkedin" width="20" height="20" ></v-img>
      </div>
      <div class="icon_1">
        <v-img :src="instagram" width="20" height="20" center></v-img>
      </div>
      <!-- <div class="icon_2">
        <v-img :src="web" width="20" height="20" center> <p>English</p></v-img>
        
      </div>
      <div class="icon_2"> 
        <v-img :src="map" width="20" height="20" center></v-img>
        <p class="kochi">Kohi</p>
      </div> -->
    </div>

    <div class="image_div">
      <div class="img_1">
        <v-img :src="google"></v-img>
        
      </div>
      <div class="img_1">
        <v-img :src="appStore"></v-img>
        
      </div>

    </div>

    <div class="footer_end">
      <p :style="{ color: 'white', fontSize: '10px',marginLeft: '105px'}">© 2023 Uber Technologies Inc.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      color: 'black',
      facebook:require('../assets/images/facebook.png'),
      twitter: require('../assets/images/twitter.png'),
      youtube: require('../assets/images/youtube.png'),
      linkedin: require('../assets/images/linkedin.png'),
      instagram: require('../assets/images/instagram.png'),
      web: require('../assets/images/web.png'),
      map: require('../assets/images/map.png'),
      appStore: require('../assets/images/apple.svg'),
      google: require('../assets/images/google.svg')
    }
  },
  mounted() {
    // this.availScreenWidth = window.screen.availWidth;
    

  },
  methods: {
    mouseHover() {
      this.color = 'white'
    }
  }
}
</script>
<style>
@import "../assets/styles/common-style.css";
</style>
