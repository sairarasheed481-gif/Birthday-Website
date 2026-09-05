// All Photos

let photos = [

    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"

];


// Current Photo

let currentPhoto = 0;


// Next Photo

function nextSlide() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    changePhoto();

}


// Previous Photo

function previousSlide() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    changePhoto();

}


// Change Photo

function changePhoto() {

    document.getElementById("slide").src =
        photos[currentPhoto];

    document.getElementById("number").innerHTML =
        "Photo " + (currentPhoto + 1) +
        " of " + photos.length;

}


// Automatic Slideshow

setInterval(function() {

    nextSlide();

}, 4000);


// Surprise

function showSurprise() {

    document.getElementById("surpriseBox").style.display =
        "block";

}


// Floating Hearts

setInterval(function() {

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.bottom = "-30px";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 20) + "px";

    heart.style.zIndex = "10";

    document.body.appendChild(heart);


    heart.animate(

        [

            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform: "translateY(-100vh)",
                opacity: 0
            }

        ],

        {

            duration: 6000

        }

    );


    setTimeout(function() {

        heart.remove();

    }, 6000);


}, 700);