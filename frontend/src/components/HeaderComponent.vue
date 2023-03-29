<template>
  <header>
    <nav>
      <div class="wrapper">
        <div v-if="paul == false" class="upper">
          <RouterLink to="/LoginComponent">Login</RouterLink> &nbsp;
          <RouterLink to="/RegisterComponent">Register</RouterLink>
        </div>
        <div v-else class="upper">
          <RouterLink to="/LoginComponent">Logout</RouterLink> &nbsp;
          <p>Name</p>
        </div>
      </div>
      <div class="logo">
        <img
          alt="logo here"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <router-link to="/HomeComponent">Ecare</router-link>
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/AuthorComponent">Author</router-link>
          </li>
          <li>
            <router-link to="/PublishersComponent">Publishers</router-link>
          </li>
          <li>
            <router-link to="/ContactComponent">Contact</router-link>
          </li>
          <li>
            <router-link to="/CartComponent">Cart</router-link>
          </li>
        </ul>
      </div>
      <div class="burger" @click="showMenu = !showMenu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="mobile-nav-links" v-show="showMenu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/AuthorComponent">/Author</router-link>
          </li>
          <li>
            <router-link to="/PublishersComponent">/Publishers</router-link>
          </li>
          <li>
            <router-link to="/ContactComponent">Contact</router-link>
          </li>
          <li>
            <router-link to="/CartComponent">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "HeaderComponent",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
}

.nav-links ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.nav-links li {
  margin-left: 40px;
  font-size: 16px;
  font-weight: bold;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
}

.burger {
  display: none;
  cursor: pointer;
  margin-right: 20px;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
  transition: all 0.3s ease;
}
@media only screen and (max-width: 600px) {
  .nav-links ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
