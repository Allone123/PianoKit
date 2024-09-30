
var buttons = document.querySelectorAll(".piano");

for(var i=0; i<buttons.length; i++) {
    if(buttons[i].classList.contains("c")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c4.mp3");
            addAnimation("c","ns");
            audio.play();
        });
    } else if(buttons[i].classList.contains("c-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c-4.mp3");
            addAnimation("c-sharp","s");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/d4.mp3");
            addAnimation("d","ns");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/d-4.mp3");
            addAnimation("d-sharp","s");
            audio.play();
        });
    } else if(buttons[i].classList.contains("e")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/e4.mp3");
            addAnimation("e","ns");
            audio.play();
        });
    } else if(buttons[i].classList.contains("f")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/f4.mp3");
            addAnimation("f","ns");
            audio.play();
        });
    } else if(buttons[i].classList.contains("f-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/f-4.mp3");
            addAnimation("f-sharp","s");
            audio.play();
        });
    } else if(buttons[i].classList.contains("g")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/g4.mp3");
            addAnimation("g","ns");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("g-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/g-4.mp3");
            addAnimation("g-sharp","s");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("a")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/a4.mp3");
            addAnimation("a","ns");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("a-sharp")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/a-4.mp3");
            addAnimation("a-sharp","s");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("b")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/b4.mp3");
            addAnimation("b","ns");
            audio.play();
        });
    }   else if(buttons[i].classList.contains("c1")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/c5.mp3");
            addAnimation("c1","ns");
            audio.play();
        });
    }  
}

function addAnimation(key, sharp) {
    var activeButton  = document.querySelector("."+key);
    if(sharp === "ns") {
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    } else {
        activeButton.classList.add("pressed-black");
        setTimeout(function(){
            activeButton.classList.remove("pressed-black");
        },100);
    }
}
