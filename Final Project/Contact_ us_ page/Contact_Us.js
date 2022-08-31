//==============(NAV BAR BTNS)
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




//=================(FORM VALIDATION)================================================================================================
var fullname  =document.getElementById("fullname");
var email     =document.getElementById("email");
var phone     =document.getElementById("phone");
var submit    =document.getElementById("submit");
var errorname =document.querySelector(".errorname");
var errormail =document.querySelector(".errormail");
var errorphone=document.querySelector(".errorphone");
var orderdone =document.querySelector(".orderdone")

fullname.addEventListener("input",function(){
if(fullname.value.length<8 && typeof(fullname.value !== typeof(8))){
    fullname.style.border="2px solid red";
    errorname.classList.add('display') ;
    // submit.preventDefault;
}
else{
    fullname.style.border="2px solid green";
    errorname.classList.remove("display")
}
})


email.addEventListener("input",function(e){
    var reg =/[*\d][a-zA-Z]@{1}[(gmail.com |yahoo.com | hotmail.com |.com|.net|.org)]/
    if(reg.test(email.value)){
        email.style.border="2px solid green";
        errormail.classList.remove("display")
        }
        else 
        {
            email.style.border="2px solid red";
            errormail.classList.add("display")
            // submit.preventDefault;
        }
        });




        phone.addEventListener("input",function(e){
            var tPattern = /01[0 |1 |2 |5]{1}[0-9]{8}/;
            if (tPattern.test(phone.value)) {
                phone.style.border="2px solid green";
                errorphone.classList.remove("display")
            } else {
                phone.style.border="2px solid red";
                errorphone.classList.add("display")
                // submit.preventDefault;
            }
        })


submit.addEventListener("click",function(e){
    var reg =/[*\d][a-zA-Z]@{1}[(gmail.com |yahoo.com | hotmail.com |.com|.net|.org)]/
    var tPattern = /01[0 |1 |2 |5]{1}[0-9]{8}/;
        if (tPattern.test(phone.value) && reg.test(email.value) &&fullname.value.length>8 ){
            orderdone.classList.add("display")
            }
            else{e.preventDefault();
                orderdone.classList.remove("display")
            }
})

//=================(FORM VALIDATION)=====================================================================================




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

//==============================================================================================================






