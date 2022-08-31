var About=document.getElementById("About")
About.addEventListener("click",function(){
window.open("About page/About.html",'_self');
})


var Home=document.getElementById("Home")
Home.addEventListener("click",function(){
    window.open("index.html",'_self');
})


var Contact_Us=document.getElementById("Contact_Us")
Contact_Us.addEventListener("click",function(){
window.open("Contact_ us_ page/Contact_Us.html",'_self');
})


//================Slider=========================================SLIDER====================================SLIDER==================

var slid=["img/Slider/slider1.jpg","img/Slider/slider2.jpg","img/Slider/slider3.jpg","img/Slider/slider4.jpg","img/Slider/slider5.jpg","img/Slider/slider6.jpg"]
var sliderimg=document.getElementById("sliderimg")
console.log(sliderimg)
var i=0;

function slider(){
    sliderimg.src=slid[i]

    if(i<slid.length-1)
    {i++;}
    else{i=0;}

}
    setInterval(slider,3000)

    window.onload =slider;

    //==============================================================================================================================

    //========================= Section Category ================================================================================= 
    var elec=document.getElementById("electronics")
    var clothes=document.getElementById("clothes")
    var skincare=document.getElementById("skincare")
    var cars=document.getElementById("cars")
    var divcars=document.getElementById("divcars")
    var divskin=document.getElementById("divskin")
    var divcloth=document.getElementById("divcloth")
    var divele=document.getElementById("divele")


    elec.addEventListener("click",function(){
        divcars.style.display='none';
        divele.style.display='inline';
        divcloth.style.display='none';
        divskin.style.display='none';
    })

    clothes.addEventListener("click",function(){
        divcars.style.display='none';
        divele.style.display='none';
        divcloth.style.display='inline';
        divskin.style.display='none';
    })

    skincare.addEventListener("click",function(){
        divcars.style.display='none';
        divele.style.display='none';
        divcloth.style.display='none';
        divskin.style.display='inline';
    })

    cars.addEventListener("click",function(){
    divcars.style.display='inline';
    divele.style.display='none';
    divcloth.style.display='none';
    divskin.style.display='none';
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

  //=================================================================================================================
  var Car=[];
  var pr={name:"mahmoud"};
  var car0=document.getElementById("car0");
  var car1=document.getElementById("car1");
  var car2=document.getElementById("car2");
  var car3=document.getElementById("car3"); 
  var car4=document.getElementById("car4");
  var car5=document.getElementById("car5");

  var car6=document.getElementById("car6");
  var car7=document.getElementById("car7");
  var car8=document.getElementById("car8");
  var car9=document.getElementById("car9");
  var car10=document.getElementById("car10");
  var car11=document.getElementById("car11");
  
  var car12=document.getElementById("car12");
  var car13=document.getElementById("car13");
  var car14=document.getElementById("car14");
  var car15=document.getElementById("car15");
  var car16=document.getElementById("car16");
  var car17=document.getElementById("car17");
  
  var car18=document.getElementById("car18");
  var car19=document.getElementById("car19");
  var car20=document.getElementById("car20");
  var car21=document.getElementById("car21");
  var car22=document.getElementById("car22");
  var car23=document.getElementById("car23");

  car0.addEventListener("click",function(){
  Car.push(pr)
  console.log(Car)
  inner.innerHTML=Car.length+"Products" ;
  })

  car1.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products" ;
  })


  car2.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car3.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car4.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car5.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car6.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car7.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car8.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car9.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car10.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })



  car11.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car12.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car13.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })


  car14.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car15.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car16.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car17.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car18.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car19.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car20.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car21.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car22.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })

  car23.addEventListener("click",function(){
    Car.push(pr)
    inner.innerHTML=Car.length+"Products";
  })