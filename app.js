
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBSl16P4rpxFWfPL5A1MBbcD_AqztPB2AY",
    authDomain: "loginsystem-190cd.firebaseapp.com",
    projectId: "loginsystem-190cd",
    storageBucket: "loginsystem-190cd.appspot.com",
    messagingSenderId: "1055134822151",
    appId: "1:1055134822151:web:e39aaa10f83cf28f1c5fa2",
    measurementId: "G-YK3QN9PSFS"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function(e){

  e.preventDefault();
  var obj = {
    fullname: fullname.value,
    email: email.value,
    password: password.value
  }
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    alert("Signed Up Successfully");
  }).catch(function(error){
    alert(error.message);
  })
  console.log(obj);
 }
