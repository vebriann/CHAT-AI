// Ganti background ke transparent

var btn = document.getElementById("btn");
var light = document.getElementById("light");
var header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 1);
//   document.getElementById('signup').classList.add('signup', window.screenY < 1);
//   document.getElementById('signup').classList.remove('signup', window.screenY > 1);
});


function toggleBtn() {
  btn.classList.toggle("activeToggle");
  light.classList.toggle("on");
}
