<!-- eslint-disable prettier/prettier -->


<template>
    <div>
      <form>
        <label for="name">Name:</label><br>
        <input type="text" v-model="name" /><br>
        <label for="email">Email:</label><br>
        <input type="email" v-model="email" /><br>
        <label for="message">Message:</label><br>
        <textarea v-model="message"></textarea>
        <br>
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
      <FooterCommponent></FooterCommponent>
    </div>
  </template>
  
  <script>
  import FooterCommponent from '../components/FooterCommponent.vue'
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Send the form data to the server or display a thank you message
        alert(`Thank you ${this.name} for your message!`)
      }
    }
  }
  </script>
  