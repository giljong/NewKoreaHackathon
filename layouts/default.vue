
<template>
  <div>
    <div>
      <NLink to="/about">
        About Page
      </NLink>
      <NLink to="/signup">
        Signup
      </NLink>
      <NLink to="/main">
        Main
      </NLink>
      <NLink to="/board">
        Board
      </NLink>
      <NLink to="/admin">
        Admin
      </NLink>
      <NLink to="/food">
        Food
      </NLink>
      <NLink to="/tour">
        Tour
      </NLink>
      <NLink to="/tour/add">
        Tour / Add
      </NLink>
      <NLink to="/souvenir">
        Souvenir
      </NLink>
    </div>
    <Nuxt />
  </div>
</template>

<style scoped>
img {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
