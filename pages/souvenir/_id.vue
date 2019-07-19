<template>
  <div>
    <h1>Souvenir!</h1>
    <img :src=post.thumbnailUrl />
    <span>{{post.title}}</span>
    <v-btn>Buy</v-btn>
  </div>
</template>

<style scoped>
  span {
    vertical-align: middle;
  }
</style>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then((res) => {
        return { post: res.data }
      })
  },
  head: {
    title: 'Souvenir page'
  }
}
</script>
