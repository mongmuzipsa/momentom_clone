const clock = document.querySelector("h2#clock");

function sayClock(){
  const date = new Date();
  const hourstr = String(date.getHours()).padStart(2,"0");
  const minstr = String(date.getMinutes()).padStart(2,"0");
  const secondstr = String(date.getSeconds()).padStart(2,"0");
  // clock.innerText = `${hourstr} : ${minstr} : ${secondstr}`;
  clock.innerText = `${hourstr} : ${minstr}`;
}
sayClock();
setInterval(sayClock, 1000);