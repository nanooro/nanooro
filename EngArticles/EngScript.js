const arrowBack = document.getElementById("arrowBack");
arrowBack.addEventListener("click", (event) => {
  history.back();
});
const article1 = document.getElementById("article1");
article1.addEventListener("click", (event) => {
  window.location.href = "articles/artical.html";
});
