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