document.addEventListener("DOMContentLoaded", function() {
  console.log("Ready!");
});

var x = document.getElementById("navLinks");
var y = document.getElementById('btn');
x.style.display = "none";
var z = window.matchMedia("(min-width: 1170px)")

function query(z) {
  if (z.matches) {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

query(z);
z.addListener(query)


function myFunction() {
  if (z.matches == false) {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = '<i class="material-icons"  id="navBtn">expand_less</i>'
    } else {
      x.style.display = "none";
      y.innerHTML = '<i class="material-icons" id="navBtn">expand_more</i>'
    }
  }
};


var mobile = window.matchMedia("(max-width: 1170px)");
var portCard = document.getElementByClassName('portfolioCard');
portCard.addEventListener('click', ()=>{
  this.ClassName.toggle("clicked");

});

//
// function query(mobile) {
//   if (mobile.matches) {
//     x.style.display = "inline-block";
//   } else {
//     x.style.display = "none";
//   }
}
