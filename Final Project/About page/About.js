var About=document.getElementById("About")
About.addEventListener("click",function(){
window.open("../About page/About.html",'_self');
})


var Home=document.getElementById("Home")
Home.addEventListener("click",function(){
    window.open("../index.html",'_self');
})


var Contact_Us=document.getElementById("Contact_Us")
Contact_Us.addEventListener("click",function(){
window.open("../Contact_ us_ page/Contact_Us.html",'_self');
})



//==============================================================================================================


// When the user scrolls down 40px from the top of the document, show the button

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;}