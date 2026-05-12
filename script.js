// ================================
// DSA COUNTER ANIMATION
// ================================

function animateCounter(id, target, speed) {

    let counter = document.getElementById(id);

    let count = 0;

    let increment = Math.ceil(target / speed);

    let updateCounter = () => {

        count += increment;

        if (count >= target) {

            count = target;

            counter.innerText = target + "+";

        }

        else {

            counter.innerText = count + "+";

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

}

animateCounter("leetcode-counter", 150, 100);

animateCounter("gfg-counter", 80, 100);

animateCounter("total-counter", 230, 100);






// ================================
// CONTACT FORM ALERT
// ================================

let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});






// ================================
// ACTIVE NAVBAR LINK
// ================================

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                document
                    .querySelector(".nav-links a[href*=" + id + "]")
                    .classList.add("active");

            });

        }

    });

};






// ================================
// SCROLL REVEAL ANIMATION
// ================================

let revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .education-card, .certificate-card, .timeline-card, .experience-card, .dsa-card"
);

function revealOnScroll() {

    let windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        let position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();






// ================================
// TYPING EFFECT
// ================================

const typingText = [

    "DSA & Problem Solving",

    "Aspiring Software Engineer",

    "AI Generalist",

    "Full Stack Learner",

    "Building In Public"

];

let textIndex = 0;

let charIndex = 0;

const typingElement = document.createElement("span");

typingElement.classList.add("typing-effect");

document.querySelector(".hero-role").appendChild(typingElement);

function typeEffect() {

    if (charIndex < typingText[textIndex].length) {

        typingElement.innerHTML += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.innerHTML =
            typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    }

    else {

        textIndex++;

        if (textIndex >= typingText.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();






// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

window.addEventListener("scroll", function() {

    let header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(2,6,23,0.95)";

        header.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";

    }

    else {

        header.style.background = "rgba(15,23,42,0.8)";

        header.style.boxShadow = "none";

    }

});






// ================================
// SKILL CARD HOVER GLOW
// ================================

let skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        let x = e.offsetX;

        let y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(56,189,248,0.25),
            rgba(255,255,255,0.03))`;

    });

    card.addEventListener("mouseleave", function() {

        card.style.background = "rgba(255,255,255,0.04)";

    });

});






// ================================
// PROJECT CARD TILT EFFECT
// ================================

let projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;

        let centerY = rect.height / 2;

        let rotateX = ((y - centerY) / 25);

        let rotateY = ((centerX - x) / 25);

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";

    });

});






// ================================
// SMOOTH BUTTON RIPPLE EFFECT
// ================================

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        let circle = document.createElement("span");

        let diameter = Math.max(
            button.clientWidth,
            button.clientHeight
        );

        let radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        let ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});






// ================================
// CONSOLE SIGNATURE
// ================================

console.log(

    "%c🚀 Portfolio Developed By JaYaRam Sappa",

    "color:#38bdf8; font-size:18px; font-weight:bold;"

);

console.log(

    "%cAspiring Software Engineer | AI Generalist | DSA Learner",

    "color:white; font-size:14px;"

);
