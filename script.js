// =====================================================
// ❤️ HAPPY BIRTHDAY NEELO
// =====================================================


// ===============================
// SETTINGS
// ===============================

const personName = "Neelo";

let currentPage = 1;

const totalPages = 9;

let musicStarted = false;

let typingStarted = false;


// ===============================
// ELEMENTS
// ===============================

const music = document.getElementById("music");

const slide = document.getElementById("slide");


// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display =
            "none";

    }, 2500);

});


// ===============================
// START SURPRISE
// ===============================

function startSurprise() {

    startMusic();

    showPage(2);

    setTimeout(function () {

        confetti();

        firework();

    }, 500);

}


// ===============================
// PAGE SYSTEM
// ===============================

function showPage(pageNumber) {

    if (pageNumber < 1) {
        pageNumber = 1;
    }

    if (pageNumber > totalPages) {
        pageNumber = totalPages;
    }

    currentPage = pageNumber;


    document
        .querySelectorAll(".page")
        .forEach(function (page) {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(
            "page" + currentPage
        );


    if (page) {

        page.classList.add("active");

        page.scrollTop = 0;

    }


    updateDots();


    if (currentPage === 6) {

        startTyping();

    }

}


function nextPage() {

    if (currentPage < totalPages) {

        showPage(currentPage + 1);

    }

}


function previousPage() {

    if (currentPage > 1) {

        showPage(currentPage - 1);

    }

}


// ===============================
// DOTS
// ===============================

const dots =
    document.getElementById("dots");


for (let i = 1; i <= totalPages; i++) {

    const dot =
        document.createElement("div");

    dot.className = "dot";

    dot.addEventListener(
        "click",
        function () {

            showPage(i);

        }
    );

    dots.appendChild(dot);

}


function updateDots() {

    document
        .querySelectorAll(".dot")
        .forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index + 1 === currentPage
            );

        });

}


// ===============================
// PHOTOS
// ===============================

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "10.jpg"
];

let photoIndex = 0;


function showPhoto() {

    slide.style.opacity = "0";


    setTimeout(function () {

        slide.src =
            images[photoIndex];

        slide.style.opacity = "1";

    }, 200);

}


function nextPhoto() {

    photoIndex++;

    if (photoIndex >= images.length) {
        photoIndex = 0;
    }

    showPhoto();

}


function previousPhoto() {

    photoIndex--;

    if (photoIndex < 0) {
        photoIndex = images.length - 1;
    }

    showPhoto();

}


// Automatic slideshow

setInterval(function () {

    if (currentPage === 3) {

        nextPhoto();

    }

}, 3500);


// ===============================
// FULLSCREEN PHOTO
// ===============================

slide.addEventListener(
    "click",
    function () {

        const viewer =
            document.createElement("div");


        viewer.style.position = "fixed";
        viewer.style.inset = "0";

        viewer.style.background =
            "rgba(0,0,0,.97)";

        viewer.style.display =
            "flex";

        viewer.style.alignItems =
            "center";

        viewer.style.justifyContent =
            "center";

        viewer.style.zIndex =
            "999999";

        viewer.style.cursor =
            "pointer";


        const image =
            document.createElement("img");


        image.src = slide.src;

        image.style.maxWidth = "95%";

        image.style.maxHeight = "95%";

        image.style.borderRadius = "20px";

        image.style.border =
            "3px solid hotpink";


        viewer.appendChild(image);

        document.body.appendChild(viewer);


        viewer.onclick =
            function () {

                viewer.remove();

            };

    }
);


// ===============================
// TYPING LETTER
// ===============================

const letterMessage = `My Dear Neelo ❤️

Today I just want to remind you how special you are.

You bring happiness into my life in ways that words cannot fully explain.

Your smile, your kindness and your beautiful heart make you truly precious.

I pray that Allah always keeps you happy, protects you from every difficulty and gives you everything your heart wishes for.

May this new year of your life bring you countless beautiful memories.

Thank you for being you.

Happy Birthday once again, Neelo. 🎂❤️

I Love You Forever.`;

let typingIndex = 0;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;


    const typing =
        document.getElementById("typing");


    function type() {

        if (
            typingIndex <
            letterMessage.length
        ) {

            typing.innerHTML +=
                letterMessage.charAt(
                    typingIndex
                );

            typingIndex++;

            setTimeout(type, 35);

        } else {

            document.getElementById(
                "letterNext"
            ).disabled = false;

        }

    }


    type();

}


// ===============================
// 🎁 GIFT
// ===============================

function openGift() {

    const box =
        document.getElementById("giftBox");

    const message =
        document.getElementById("giftMessage");

    const instruction =
        document.getElementById("giftInstruction");


    box.innerHTML = "💝✨";

    box.style.animation =
        "none";


    message.style.display =
        "block";


    instruction.innerHTML =
        "A little message from my heart ❤️";


    document.getElementById(
        "giftNext"
    ).style.display = "inline-block";


    confetti();

    firework();

}


// ===============================
// 🎵 MUSIC
// ===============================

function startMusic() {

    if (musicStarted) {
        return;
    }

    musicStarted = true;


    music.play()
        .then(function () {

            document.getElementById(
                "musicButton"
            ).innerHTML =
                "🎵 Pause";

        })
        .catch(function () {

            musicStarted = false;

        });

}


function toggleMusic() {

    if (music.paused) {

        music.play();

        document.getElementById(
            "musicButton"
        ).innerHTML =
            "🎵 Pause";

    } else {

        music.pause();

        document.getElementById(
            "musicButton"
        ).innerHTML =
            "▶️ Play";

    }

}


// ===============================
// ❤️ FLOATING HEARTS
// ===============================

setInterval(function () {

    const heart =
        document.createElement("div");


    heart.className =
        "heart";

    heart.innerHTML =
        ["❤️", "💖", "💕", "💗"][
            Math.floor(
                Math.random() * 4
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        18 + Math.random() * 30 + "px";


    document.body.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, 7000);

}, 500);


// ===============================
// 🎈 BALLOONS
// ===============================

setInterval(function () {

    const balloon =
        document.createElement("div");


    balloon.className =
        "balloon";


    balloon.innerHTML =
        ["🎈", "🎉", "🎊"][
            Math.floor(
                Math.random() * 3
            )
        ];


    balloon.style.left =
        Math.random() * 100 + "%";


    balloon.style.fontSize =
        40 + Math.random() * 30 + "px";


    document.body.appendChild(
        balloon
    );


    setTimeout(function () {

        balloon.remove();

    }, 12000);

}, 1800);


// ===============================
// ⭐ STARS
// ===============================

function createStars() {

    for (let i = 0; i < 130; i++) {

        const star =
            document.createElement("div");


        star.className =
            "star";


        star.innerHTML =
            "✦";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.fontSize =
            7 + Math.random() * 15 + "px";


        star.style.animationDelay =
            Math.random() * 3 + "s";


        document.body.appendChild(
            star
        );

    }

}

createStars();


// ===============================
// 🎊 CONFETTI
// ===============================

function confetti() {

    const colors = [
        "red",
        "pink",
        "gold",
        "purple",
        "white",
        "hotpink"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            "-20px";

        piece.style.width =
            "8px";

        piece.style.height =
            "12px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.zIndex =
            "99999";

        piece.style.pointerEvents =
            "none";


        document.body.appendChild(
            piece
        );


        const x =
            (Math.random() - .5) * 500;


        piece.animate(
            [
                {
                    transform:
                        "translate(0,0) rotate(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    4000 + Math.random() * 2000
            }
        );


        setTimeout(function () {

            piece.remove();

        }, 6000);

    }

}


// ===============================
// 🎆 FIREWORK
// ===============================

function firework() {

    const colors = [
        "red",
        "pink",
        "gold",
        "white",
        "purple",
        "hotpink"
    ];


    const centerX =
        20 + Math.random() * 60;

    const centerY =
        20 + Math.random() * 35;


    for (let i = 0; i < 45; i++) {

        const spark =
            document.createElement("div");


        spark.style.position =
            "fixed";

        spark.style.left =
            centerX + "%";

        spark.style.top =
            centerY + "%";

        spark.style.width =
            "7px";

        spark.style.height =
            "7px";

        spark.style.borderRadius =
            "50%";

        spark.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        spark.style.zIndex =
            "99999";

        spark.style.pointerEvents =
            "none";


        document.body.appendChild(
            spark
        );


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            100 +
            Math.random() * 300;


        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        spark.animate(
            [
                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500
            }
        );


        setTimeout(function () {

            spark.remove();

        }, 1500);

    }

}


// ===============================
// 🎉 FINAL CELEBRATION
// ===============================

function celebrate() {

    const finalMessage =
        document.getElementById(
            "finalMessage"
        );


    finalMessage.style.display =
        "block";


    for (let i = 0; i < 4; i++) {

        setTimeout(
            firework,
            i * 600
        );

    }


    confetti();


    setTimeout(
        confetti,
        1500
    );

}


// ===============================
// AUTOMATIC FIREWORKS
// ===============================

setInterval(function () {

    if (
        currentPage === 9
    ) {

        firework();

    }

}, 4000);


// ===============================
// CONSOLE
// ===============================

console.log(
    "❤️ Happy Birthday Neelo ❤️"
);
