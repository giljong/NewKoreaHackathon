<template>
  <div>
    <h1>Tourist Attraction!</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink v-if="post.id % 2 === 1" :to="{ name: 'souvenir-id', params: { id: post.id } }">
          <img :src=post.thumbnailUrl />
        </NuxtLink>
        <NuxtLink v-else :to="{ name: 'tour-id', params: { id: post.id } }">
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
        return { posts: res.data.slice(0, 40) }
      })
  },
  head: {
    title: 'Main page'
  }
}
</script>
