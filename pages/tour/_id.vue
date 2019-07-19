<template>
  <div>
    <h1>Tour!</h1>
    <img :src=post.thumbnailUrl />
    <span>{{post.title}}</span>
    <button>Request</button>
  </div>
</template>

<script>
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
    title: 'Tour page'
  }
}
</script>
