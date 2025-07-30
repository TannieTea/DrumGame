var drumList=document.querySelectorAll(".drum");

var len=drumList.length;

for(let i=0; i<len; i++){
    drumList[i].addEventListener("click", handleClick);
}

function handleClick(){

    var MyButtonInnerHTML = this.innerHTML;

    makeSound(MyButtonInnerHTML);
    buttonAnimation(MyButtonInnerHTML);

    
}

document.addEventListener("keydown", function(Event){
    makeSound(Event.key);
    buttonAnimation(Event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var snare= new Audio("./sounds/crash.mp3");
            snare.play();
            break;

        case "a":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "s":
            var crash= new Audio("./sounds/snare.mp3");
            crash.play();
            break;

        case "d":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom3= new Audio("./sounds/tom-4.mp3");
            tom3.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); 
      if(activeButton){  
        activeButton.classList.add("pressed"); 
      }

      setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 25);

}










