<template>
  <div>
    <h1>Souvenir!</h1>
    <img :src=post.thumbnailUrl />
    <span>{{post.title}}</span>
    <button>Buy</button>
  </div>
</template>

<style scoped>
  span {
    vertical-align: middle;
  }
</style>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/photos/1')
      .then((res) => {
        return { post: res.data }
      })
  },
  head: {
    title: 'Souvenir page'
  }
}
</script>
