/*
Name: Kirsten Wilson
Date: 5/12/21
Assignment: Vue a TV Show
*/


<template>
  <div id="app">
    <Header />
    <div class="container" id="isThisYourCard">
      <div class="row">
        <Card
          v-for="tv in tvs"
          v-bind:key="tv.id"
          v-bind:tvobj="tv"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
/*imports to make this thing work*/
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Card,
  },
  data() {
    return {
      /*had some hard coded stuff to test the setup because axios was giving me errors*/
      tvs: [],
    };
  },
  mounted()
  {
    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=3df205218b4378351effe0505c27c613&language=en-US&page=1")
    .then( (response) => {
      this.tvs = response.data.results
    })
  }
};
</script>
/*to change the look of the page*/
<style>
body {
background-image: url('~@/assets/PopcornEverywhere.jpg');
background-position: center;

 
}
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E60707;
}
/*To center the cards and set a different color for the font*/

#isThisYourCard{
  margin-left: 350px;
  color: #000000;
}
</style>