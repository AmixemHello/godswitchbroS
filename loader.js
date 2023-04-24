const loading = document.querySelector(".loading");
const app = document.querySelector(".app");
function loaded() {
     
     loading.classList.add("disable");
     app.classList.remove("disable");
 }
setTimeout(loaded, 5000);
