import { defineStore } from "pinia";
import { useUserStore } from "./users";
import router from "../src/router";

const users = useUserStore();
export const useLoginStore = defineStore("Login", {
  state: () => ({ Email: "", Password: "" }),
  actions: {
    loginForm() {
      // Send the form data to the server or display a thank you message
      if (users == this.Email && users == this.Password) {
        //router.push("/ContentManagement");
        alert("icorrect");
      } else {
        //router.push("/LoginComponent");
       // alert("incorrect"${{this.Email}});
        alert( ` of email ${this.Email}  for your Password! ${this.Password}`);
      }
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`Forgot your Password again`);
    },
  },
});
