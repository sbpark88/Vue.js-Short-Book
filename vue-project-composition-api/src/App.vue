<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calculator-with-options-api">Calculator(Options API)</router-link> |
    <router-link to="/calculator-with-composition-api">Calculator(Composition API)</router-link> |
    <router-link to="/calculator-with-composition-api-and-external-files">Calculator(External Files)</router-link> |
    <router-link to="/provide-inject-with-composition-api">Provide/Inject(Composition API)</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
