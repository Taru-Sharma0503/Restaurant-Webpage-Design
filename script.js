function signup(){
  let user = {
    username: document.getElementById("su_username").value,
    email: document.getElementById("su_email").value,
    password: document.getElementById("su_password").value,
    phone: document.getElementById("su_phone").value
  };

  if(localStorage.getItem(user.email)){
    alert("Account already exists");
    return;
  }

  localStorage.setItem(user.email, JSON.stringify(user));
  alert("Account Created Successfully");
  window.location.href = "login.html";
}

function login(){
  let email = document.getElementById("li_email").value;
  let password = document.getElementById("li_password").value;

  let storedUser = localStorage.getItem(email);

  if(!storedUser){
    alert("Account not found");
    return;
  }

  let user = JSON.parse(storedUser);

  if(user.password === password){
    alert("Login Successful");
    window.location.href = "restaurant.html";
  }else{
    alert("Incorrect Password");
  }
}