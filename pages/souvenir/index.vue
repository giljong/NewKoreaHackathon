<template>
  <div>
    <h1>Souvenir!</h1>
    <p>{{ post }}</p>
  </div>
</template>

<script>
export default {
  watch: {
    post () {
      // We will see what `params` is shortly
      return this.$route.params.post
    }
  },
  head: {
    title: 'Souvenir page'
  }
}
</script>
