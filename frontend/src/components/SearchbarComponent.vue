<script setup>
import { useSearchStore } from "../../store/search";
const searchstored = useSearchStore();
</script>
<template>
  <div>
    <form @submit.prevent="searchstored.searchForm">
      <div class="input-group">
        <input
          type="text"
          v-model="searchstored.search"
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
    <P class="searchresult">{{ searchstored.search }} </P>
  </div>
</template>
<style>
form {
  margin-top: 3%;
}
.searchresult {
  color: yellow;
}
</style>
