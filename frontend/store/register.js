import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    Pronoun: 0,
    Name: 10,
    Email: 0,
    Phonenumber: 0,
    password: 0,
    ConfirmPassword: 0,
  }),
  actions: {
    registerForm() {
      // Send the form data to the server or display a thank you message
      alert(
        `Thank you ${this.Name}, your details ${this.Pronoun} ${this.Name}${this.Email} ${this.Phonenumber} ${this.password} ${this.ConfirmPassword} has been registered successfully !`
      );
    },
  },
});
