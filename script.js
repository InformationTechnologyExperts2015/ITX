var navbar =document.getElementById("menuu");
var menu =document.getElementById("menuxd");
 window.onscroll=function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");

  }
  else{
    navbar.classList.remove("sticky");
  }
 }
