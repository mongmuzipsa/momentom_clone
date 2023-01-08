const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userHeader = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  onInputUserdata(username);
  localStorage.setItem(USERNAME_KEY, username);
}

function onInputUserdata(username){
  userHeader.classList.remove(HIDDEN_CLASSNAME);
  userHeader.textContent = `Hello ${username}`;
} 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  onInputUserdata(savedUsername);
}