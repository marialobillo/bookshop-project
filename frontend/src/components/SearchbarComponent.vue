<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <form @submit.prevent="search">
      <div class="input-group">
        <input
          type="text"
          v-model="query"
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
