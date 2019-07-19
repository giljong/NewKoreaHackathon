
<template>
  <div class="container">
    <div class="logo">
      <img width="226" height="100" src="~/assets/images/logo_unitrip.png" />
    </div>
    <div>
      <div class="menu">
        <NLink to="/about">
          About
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
  </div>
</template>

<style scoped>
.menu a {
  margin-left: 16px;
}

img {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
