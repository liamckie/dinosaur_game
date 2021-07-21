var character = document.getElementById("character");
var block = document.getElementById("block");
let scoreCount = document.querySelector(".score");
let score = 0;

var checkHit = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if (characterTop <= 131 && blockLeft < 10 && blockLeft > 0) {
        score++;
        scoreCount.textContent = score;  
    }

    if (blockLeft <= 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose! Your Score was : " + score);
        location.reload();

    }
}, 10)

window.addEventListener("click", function() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    
    }, 500)
});