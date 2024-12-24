const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const pink = document.getElementById("pink");

red.style.backgroundColor = "red";
green.style.backgroundColor = "green";
blue.style.backgroundColor = "blue";
yellow.style.backgroundColor = "yellow";
pink.style.backgroundColor = "pink";

red.addEventListener("click", function () {
  alert("red");
});
green.addEventListener("click", function () {
  alert("green");
});
blue.addEventListener("click", function () {
  alert("blue");
});
yellow.addEventListener("click", function () {
  alert("yellow");
});
pink.addEventListener("click", function () {
  alert("pink");
});
