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
            var imgPath = String(pic.src).split("\/");
            var basePath = imgPath.slice(0,imgPath.length - 1).join("\/") + "\/";

            console.log(imgPath[imgPath.length - 1]);
            console.log(basePath)
            

        })
    }
)

