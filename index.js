
var buttons = document.querySelectorAll(".piano");

for(var i=0; i<buttons.length; i++) {
    if(buttons[i].classList.contains("c")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("c-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c-4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/d4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/d-4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("e")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/e4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("f")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/f4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("f-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/f-4.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("g")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/g4.mp3");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("g-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/g-4.mp3");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("a")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/a4.mp3");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("a-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/a-4.mp3");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("b")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/b4.mp3");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("c1")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c5.mp3");
            audio.play();
        });
    }  
}


