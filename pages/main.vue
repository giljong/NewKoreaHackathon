<template>
  <div>
    <h1>Tourist Attraction!</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          <img :src=post.thumbnailUrl />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
  ul li {
    display: inline-block;
    margin: 0 8px;
  }
</style>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return { posts: res.data.slice(0, 5) }
      })
  },
  head: {
    title: 'Main page'
  }
}
</script>
