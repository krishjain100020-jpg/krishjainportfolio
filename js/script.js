/* ========================================
   KRISH JAIN PORTFOLIO
   SCRIPT.JS
======================================== */

/* ---------------------------
   NAVBAR SCROLL EFFECT
---------------------------- */

const navbar = document.getElementById("navbar");

if(navbar){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.background = "rgba(8,8,8,.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        }else{

            navbar.style.background = "rgba(8,8,8,.7)";
            navbar.style.boxShadow = "none";

        }

    });

}


/* ---------------------------
   SCROLL REVEAL ANIMATION
---------------------------- */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ---------------------------
   PARALLAX HERO IMAGE
---------------------------- */

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    if(!heroImage) return;

    let x = (window.innerWidth / 2 - e.clientX) / 50;
    let y = (window.innerHeight / 2 - e.clientY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ---------------------------
   PROJECT CARD HOVER EFFECT
---------------------------- */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${-(y - rect.height/2)/25}deg)
            rotateY(${(x - rect.width/2)/25}deg)
            translateY(-10px)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            `;

    });

});


/* ---------------------------
   ACTIVE NAVIGATION
---------------------------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ---------------------------
   TYPEWRITER EFFECT
---------------------------- */

const title = document.querySelector(".hero-text h2");

if(title){

    const text = title.innerText;

    title.innerText = "";

    let index = 0;

    function type(){

        if(index < text.length){

            title.innerText += text.charAt(index);

            index++;

            setTimeout(type, 50);

        }

    }

    setTimeout(type, 500);

}


/* ---------------------------
   SMOOTH BUTTON ANIMATION
---------------------------- */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px) scale(1)";

    });

});


/* ---------------------------
   COUNTER ANIMATION
---------------------------- */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.getAttribute("data-target"));

        let count = 0;

        const speed = target / 100;

        const update = () => {

            if(count < target){

                count += speed;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter();

        }

    });

});

counters.forEach(counter=>{

    observer.observe(counter);

});


/* ---------------------------
   CUSTOM CURSOR (OPTIONAL)
---------------------------- */

/*onst cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

}); */
