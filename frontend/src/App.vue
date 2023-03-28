<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterCommponent from "./components/FooterCommponent.vue";
const paul = !true;
</script>

<template>
  <header>
    <img
      alt="logo here"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <div v-if="paul == false" class="upper">
        <RouterLink to="/LoginComponent">Login</RouterLink> &nbsp;
        <RouterLink to="/RegisterComponent">Register</RouterLink>
      </div>
      <div v-else class="upper">
        <RouterLink to="/LoginComponent">Logout</RouterLink> &nbsp;
        <p>Name</p>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/AuthorComponent">Author</RouterLink>
        <RouterLink to="/PublishersComponent">Publishers</RouterLink>
        <RouterLink to="/ContactComponent">Contact</RouterLink>
        <RouterLink to="/CartComponent">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <FooterCommponent />
</template>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .upper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    text-align: end;
    margin: 0 auto 2rem;
    padding: 0 1rem;
    gap: 3rem;
  }
}
</style>
