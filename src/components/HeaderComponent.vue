<template>
    <div>
        <v-app>
          <v-app-bar app color="black" dark dense>
              <v-toolbar-title class="ml-10 pr-5">Uber</v-toolbar-title>
              <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" class="pl-10 pr-8" id="company-nav">
                    Company
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    Option {{ n }}
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn id="login" class="pl-10"> safety </v-btn>
              <v-btn id="login" > Help </v-btn>
              <v-spacer></v-spacer>
              <div class="pr-16">
                <v-btn icon v-bind="attrs" v-on="on" id="products">
                      <v-icon
                      small
                      color="white"
                    >
                      mdi-earth
                    </v-icon>
                      EN
                    </v-btn>
                <v-menu left bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" id="products">
                      <v-icon
                      small
                      color="white"
                    >
                      mdi-dialpad
                    </v-icon>
                      Products
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                      Option {{ n }}
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn id="login"> Log in </v-btn>
                <v-btn id="signup"> Sign up </v-btn>
            </div>
          </v-app-bar>
      </v-app>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
};

</script>
<style>
@import "../assets/styles/common-style.css";
</style>