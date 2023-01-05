<!-- eslint-disable prettier/prettier -->

<template>
<div class="login-container">
    <form>
        <div class="username"><label for="username">username</label></div>
        <div class=""><input type="text" placeholder="username" class=""></div>
        <div class="password"><label for="password">password</label></div>
        <div class=""><input type="password" placeholder="password" class=""></div>
        
        <div class=""><input type="submit"></div>
        <p class="error-message"></p>
    </form>
</div>
</template>
<style scoped>
/* Use a grid-based layout */
.login-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
  align-items: center;
}

/* Make use of media queries to adjust the layout on smaller screens */
@media (max-width: 600px) {
  .login-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}



/* Style the form container */
form {
  width: 350px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Style the form elements */
form input[type="text"],
form input[type="password"] {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
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
label[for="username"] {
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
} /* Style the input field */
#username {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px; 
  padding: 12px;
  text-transform: uppercase;
  box-sizing: border-box;
  font-size: 14px;
}
label[for="password"] {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 8px;
} /* Style the input field */
#password {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
