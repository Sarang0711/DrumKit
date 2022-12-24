var noOfDrums = document.querySelectorAll(".drum").length;              // no of drums 


// Detecting Button press 
for(let i=0; i<noOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var thisButton = this.innerHTML;     // It points to the button that is pressed ex: a s w
        makeSound(thisButton);
        buttonAnimation(thisButton);
    });
}

// Detecting keyboard press 
document.addEventListener('keydown', (event)=> {
    makeSound(event.key);          // event gives whole bunch of info about which key was pressed
    buttonAnimation(event.key);
});

function makeSound(key) {
        
    switch(key) {
        case 'w': {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        }
        case 'a': {
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        }
        case 's': {
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        }
        case 'd': {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        }
        case 'j': {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        }
        case 'k': {
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        }
        case 'l': {
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        }
        default: {
            console.log(key);
        }
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
