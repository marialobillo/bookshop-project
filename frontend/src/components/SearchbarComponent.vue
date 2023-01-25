<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      search: "",
      
    };
  },
  methods: {
    searchForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.search} search message`);
    },
  },
};</script>
<template>
  <div>
    <form @submit.prevent="searchForm">
      <div class="input-group">
        <input
          type="text"
          v-model="search"
          placeholder="Search"
          class="form-control"
        />
        <div class="input-group-append">
          <button type="submit" class="btn btn-secondary">
            <i class="fa fa-search">search</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
form {
  margin-top: 3%;
}
</style>
