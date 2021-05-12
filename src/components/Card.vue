/*
Name: Kirsten Wilson
Date: 5/12/21
Assignment: Vue a TV Show
*/


<template>
  <div class="card" style="width: 18rem">
    <!--<img :src="require(`/src/assets/${tvobj.poster_path}`)" class="card-img-top" alt="...">-->
    <img :src="`https://image.tmdb.org/t/p/w500${tvobj.poster_path}`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{tvobj.title}}</h5>
      <p class="card-text">
        {{tvobj.overview}}
      </p>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['tvobj']
};
</script>