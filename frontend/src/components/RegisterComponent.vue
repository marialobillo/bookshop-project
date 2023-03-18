<script setup>
import FootComponent from "../components/FootComponent.vue";
import { useRegisterStore } from "../../store/register";
const RegisterStore = useRegisterStore();
</script>
<template>
  <div class="">
    <form>
      <label for="">Pronoun</label>
      <input type="text" v-model="RegisterStore.Pronoun" />
      <label for="">Name</label>
      <input type="text" v-model="RegisterStore.Name" />
      <label for="">Email</label>
      <input type="text" v-model="RegisterStore.Email" />
      <label for="">Phone number</label>
      <input type="text" v-model="RegisterStore.Phonenumber" />
      <label for="">Password</label>
      <input type="password" v-model="RegisterStore.password" />
      <label for="">Confirm password</label>
      <input type="password" v-model="RegisterStore.ConfirmPassword" />
      <input type="submit" @click.prevent="RegisterStore.registerForm" />
    </form>
  </div>
</template>
<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 8%;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

@media only screen and (max-width: 600px) {
  form {
    width: 90%;
  }
}
</style>
