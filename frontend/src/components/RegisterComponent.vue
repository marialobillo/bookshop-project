<!-- eslint-disable prettier/prettier -->
<template>

<div class="">
<form>
    <label for="">pronoun</label>
    <input type="text" >
    <label for="">name</label>
    <input type="text" >
    <label for="">email</label>
    <input type="text" >
    <label for="">phone number</label>
    <input type="text" >
    <label for="">password</label>
    <input type="password">
    <label for="">confirm password</label>
    <input type="password">
    <input type="submit">

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
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
  }
  
  input[type="submit"] {
    width: 100%;
    background-color: #4CAF50;
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