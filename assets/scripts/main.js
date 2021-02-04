document.getElementById("volume-slider").addEventListener("input", function() {
    let vol = document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
});

document.getElementById("volume-number").addEventListener("input", function() {
    let slider = document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
});

document.getElementById("volume-number").addEventListener("input", function() {
    var aud = document.getElementById("volume-number").value;
    if (aud == 0) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-0.svg";
    } else if (aud <= 33) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-1.svg";
    } else if (aud <= 66) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-2.svg";
    } else {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-3.svg";
    }
});

document.getElementById("volume-slider").addEventListener("input", function() {
    var aud = document.getElementById("volume-slider").value;
    if (aud == 0) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-0.svg";
    } else if (aud <= 33) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-1.svg";
    } else if (aud <= 66) {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-2.svg";
    } else {
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-3.svg";
    }
});

document.getElementById("audio-selection").onclick = function() {changeImage()};
function changeImage() {
    if (document.getElementById("radio-air-horn").checked == true ) {
        document.getElementById("sound-image").src = "assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/air-horn.mp3";
    }
    
    if (document.getElementById("radio-car-horn").checked == true) {
        document.getElementById("sound-image").src = "assets/media/images/car.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/car-horn.mp3";
    }

    if (document.getElementById("radio-party-horn").checked == true) {
        document.getElementById("sound-image").src = "assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/party-horn.mp3";
    }
};

document.getElementById("honk-btn").onclick = function(event) {playAudio()};
function playAudio() {
    event.preventDefault();
    let vol = document.getElementById("volume-number").value;
    if (vol == 0) {
        document.getElementById("horn-sound").volume = 0;
    } else {
        let audio = document.getElementById("horn-sound");
        vol = document.getElementById("horn-sound").volume = vol/100;
        audio.play();
    }
};