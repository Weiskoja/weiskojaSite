//invert initials on click to access fun menu
var inverted;
document.querySelector("#initials").addEventListener("click", function(){
    if(!inverted){
        document.querySelector("#initials").style.filter="invert(1)";
        //console.log("the image is inverted")
        inverted = true;
    }
    else{
        document.querySelector("#initials").style.filter="invert(0)";
        //onsole.log("image has been reverted")
        inverted = false;
    }
})

var currPic = "B10Celebration.jpeg";
var pics = document.querySelectorAll(".galleryObj");
var displayPic = document.querySelector("#displayPic");

pics.forEach(
    pic => {
        pic.addEventListener("click", function(){
            displayPic.style.backgroundImage = "url(" + pic.src + ")"   
        })
    }
)

//gets background-image css value **FOR FUTURE USE**
//console.log(window.getComputedStyle(displayPic).getPropertyValue("background-image"))
