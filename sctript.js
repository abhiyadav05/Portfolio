
 let navbar=document.querySelector('.navbar');


function myFunction() {
    document.getElementById("cross-icon").style.display = "block",TransitionEvent=".5s ease";
    document.getElementById("menu-icon").style.display = "none"
    document.getElementById("navbar").style.transform = "translateY(40px)";
    document.getElementById("navbar").style.top = "0%";
    
  }

  function myFunctionTwo() {
    document.getElementById("cross-icon").style.display = "none",TransitionEvent=".5s ease";
    document.getElementById("menu-icon").style.display = "block"
    document.getElementById("navbar").style.transform = "translateY(-400px)";
  }

  

 