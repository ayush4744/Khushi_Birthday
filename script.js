document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("bg-music");
    let playButton = document.getElementById("play-music");

    // Play music when button is clicked
    playButton.addEventListener("click", function() {
        music.play().catch(error => console.log("Autoplay prevented:", error));
    });

    // 🎈 Fever Pop-Up Message
    document.getElementById("fever-popup").style.display = "block";
});

// Close fever pop-up
function closePopup() {
    document.getElementById("fever-popup").style.display = "none";
}

// 🎂 Message Board - Add Wish
function addWish() {
    let input = document.getElementById("wishInput").value;
    if (input.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = input;
        document.getElementById("wishes").appendChild(li);
        document.getElementById("wishInput").value = "";

        // Scroll to the latest message
        let wishesContainer = document.getElementById("wishes");
        wishesContainer.scrollTop = wishesContainer.scrollHeight;
    }
}

// 🎈 Floating Balloons
document.addEventListener("DOMContentLoaded", function() {
    function createBalloon() {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 2 + 4 + "s"; // Faster for small screens

        document.getElementById("balloon-container").appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }

    function getRandomColor() {
        let colors = ["#FF4081", "#3F51B5", "#FFEB3B", "#4CAF50", "#FF5722"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createBalloon, 1000);
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("fever-popup").style.display = "block";
    });
    
    function closePopup() {
        document.getElementById("fever-popup").style.display = "none";
    }
    
});