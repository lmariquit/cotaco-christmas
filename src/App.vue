<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/wishlists">Wishlists</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0 0.5rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}

.btn--round {
  padding: 0.5rem 2rem;
  text-align: center;
  border: 1px solid #39495c;
  border-radius: 1.5rem;
}
</style>
