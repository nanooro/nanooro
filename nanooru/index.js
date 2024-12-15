const kannadaDiv = document.getElementById("kannadaDiv")
const englishDiv = document.getElementById("englishDiv")
function kannadaRedirect() {
    window.location.href = "Kanarticles/kanArticles.html"; 
}  
kannadaDiv.addEventListener('click', kannadaRedirect);
  
function englishRedirect() {
    window.location.href = "EngArticles/EngArticles.html"; 
}  
englishDiv.addEventListener('click', englishRedirect);
  