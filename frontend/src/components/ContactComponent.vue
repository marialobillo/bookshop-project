<!-- eslint-disable prettier/prettier -->
<script set>
import FooterCommponent from "../components/FooterCommponent.vue";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.name} of email ${this.email}  for your message! ${this.message} `);
    },
  },
};
</script>

<template>
  <div>
    <form>
      <label for="name">Name:</label><br />
      <input type="name" v-model="name" /><br />
      <label for="email">Email:</label><br />
      <input type="email" v-model="email" /><br />
      <label for="message">Message:</label><br />
      <textarea v-model="message"></textarea>
      <br />
      <input type="submit" @click.prevent="submitForm" />
    </form>
    <FooterCommponent />
  </div>
</template>
<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}

/* Style the form elements */
form input[type="name"],
form input[type="email"] {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 14px;
}

form input[type="submit"] {
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #0095d9;
  cursor: pointer;
}
/*style text area*/
textarea {
  width: 100%;
  height: 174px;
  border: none;
  border-radius: 5%;
  font-size: large;
}
/* Style the error message */
form .error-message {
  margin: 0;
  padding: 0;
  color: red;
  font-size: 14px;
}
/* Style the button */
button {
  display: inline-block;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #0095d9;
  cursor: pointer;
}
/* Style the hover state */
button:hover {
  background-color: #0075c9;
}
/* Style the disabled state */
/* Style the label */
label[for="name"] {
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 18%;
  margin-bottom: 2%;
} /* Style the input field */
#name {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 12px;
  text-transform: uppercase;
  box-sizing: border-box;
  font-size: 14px;
}
label[for="email"] {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 8px;
} /* Style the input field */
#email {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 14px;
}
label[for="message"] {
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
} /* Style the input field */
#message {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 12px;
  text-transform: uppercase;
  box-sizing: border-box;
  font-size: 14px;
}
input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
