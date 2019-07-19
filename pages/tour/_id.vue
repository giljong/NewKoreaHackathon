<template>
  <div>
    <div class="info">
      <h1>Tour!</h1>
      <img :src=post.thumbnailUrl />
      <span>{{post.title}}</span>
      <pre>
        북한의 아름다운 자연 경관을 소개 합니다.

        저는 가이드 XXX 입니다.
        저는 이곳에서 나고 자라서 YYY 지역에 대해 누구보다 잘 알고 있으며
        관광객들이 흔히 잘 알지 못하는 구석구석 소개해 드리겠습니다.
      </pre>
      <v-btn @click="btnClick">가이드 요청</v-btn>
    </div>
    <h1>review</h1>
    <div class="review">
      <ul>
        <li>
        <!-- <li v-for="(review, index) in reviews" :key="index"> -->
          <!-- {{review.content}} -->
          <!-- <font-awesome-icon icon="spinner" size="xs" />{{review.star}} -->
          Good 5.0
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  ul li {
    display: block;
    border: 1px solid black;
    padding: 16px;
    margin-bottom: 4px;
    border-radius: 8px;
  }
</style>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

if (process.browser) {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}

export default {
  asyncData ({ req, params }) {
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`).then(res => {
    // return axios.get(`/api/tour`).then(res => {
      // We can return a Promise instead of calling the callback
      return {
        post: res.data
      }
    })
  },
  head: {
    title: 'Tour page'
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    btnClick: () => {
      alert('요청이 정상적으로 되었습니다. 내 여행 정보에서 확인하세요. ')
    }
  }
}
</script>
