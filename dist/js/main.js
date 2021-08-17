"use strict";var navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close");navToggle&&navToggle.addEventListener("click",function(){navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",function(){navMenu.classList.remove("show-menu")});var navLink=document.querySelectorAll(".nav__link");function linkAction(){document.getElementById("nav-menu").classList.remove("show-menu")}navLink.forEach(function(e){return e.addEventListener("click",linkAction)});var textes=document.querySelectorAll(".typewriter span"),prevText=textes[textes.length-1],i=0;function animate(){var e=i++%textes.length;prevText.style.display="none",textes[e].style.display="block",prevText=textes[e]}animate(),setInterval(function(e){return animate()},6e3);var skillsContent=document.getElementsByClassName("skills__content"),skillsHeader=document.querySelectorAll(".skills__header");function toggleSkills(){for(var e=this.parentNode.className,t=0;t<skillsContent.length;t++)skillsContent[t].className="skills__content skills__close";"skills__content skills__close"===e&&(this.parentNode.className="skills__content skills__open")}skillsHeader.forEach(function(e){e.addEventListener("click",toggleSkills)});var tabs=document.querySelectorAll("[data-target]"),tabContents=document.querySelectorAll("[data-content]");tabs.forEach(function(t){t.addEventListener("click",function(){var e=document.querySelector(t.dataset.target);tabContents.forEach(function(e){e.classList.remove("qualification__active")}),e.classList.add("qualification__active"),tabs.forEach(function(e){e.classList.remove("qualification__active")}),t.classList.add("qualification__active")})});var modalViews=document.querySelectorAll(".services__modal"),modalBtns=document.querySelectorAll(".services__button"),modalCloses=document.querySelectorAll(".services__modal-close"),modal=function(e){modalViews[e].classList.add("active-modal")};modalBtns.forEach(function(e,t){e.addEventListener("click",function(){modal(t)})}),modalCloses.forEach(function(e){e.addEventListener("click",function(){modalViews.forEach(function(e){e.classList.remove("active-modal")})})});var swiperPortfolio=new Swiper(".portfolio__container",{cssMode:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),swiperTestimonial=new Swiper(".testimonial__container",{loop:!0,grabCursor:!0,spaceBetween:48,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{568:{slidesPerView:2}}}),sections=document.querySelectorAll("section[id]");function scrollActive(){var o=window.pageYOffset;sections.forEach(function(e){var t=e.offsetHeight,n=e.offsetTop-50,e=e.getAttribute("id");n<o&&o<=n+t?document.querySelector(".nav__menu a[href*="+e+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+e+"]").classList.remove("active-link")})}function scrollHeader(){var e=document.getElementById("header");150<=this.scrollY?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollTop(){var e=document.getElementById("scroll-up");560<=this.scrollY?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollTop);var cursor=document.querySelector(".cursor"),mouseMove=function(e){cursor.style.cssText="left: "+e.clientX+"px; top: "+e.clientY+"px;"};window.addEventListener("mousemove",mouseMove);var themeButton=document.getElementById("theme-button"),lightTheme="light-theme",iconTheme="uil-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=function(){return document.body.classList.contains(lightTheme)?"light":"dark"},getCurrentIcon=function(){return themeButton.classList.contains(iconTheme)?"uil-moon":"uil-sun"};function resetForm(e){var t=document.querySelectorAll("input"),n=document.querySelectorAll("textarea");t.forEach(function(e){return e.value=""}),n.forEach(function(e){return e.value=""})}function sendMail(){var e=document.getElementById("name").value,t=document.getElementById("email").value,n=document.getElementById("project"),o=document.getElementById("message").value;emailjs.send("service_825jig9","template_ifqgbxx",{from_name:e,from_email:t,project:n,message:o}).then(function(e){})}selectedTheme&&(document.body.classList["light"===selectedTheme?"add":"remove"](lightTheme),themeButton.classList["uil-moon"===selectedIcon?"add":"remove"](iconTheme)),themeButton.addEventListener("click",function(){document.body.classList.toggle(lightTheme),themeButton.classList.toggle(iconTheme),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())}),emailjs.init("user_d2kmjdu9H4v67TMtQkObS");var form=document.getElementById("form"),fullName=document.getElementById("name"),email=document.getElementById("email"),project=document.getElementById("project"),message=document.getElementById("message");form.addEventListener("submit",function(e){e.preventDefault(),checkValues(),checkInputs()});var checkInputs=function(){var e=fullName.value.trim(),t=email.value.trim(),n=project.value.trim(),o=message.value.trim();""==e||null==e?setErrorFor(fullName,"Name cannot be blank"):setSuccessFor(fullName),""==t||null==t?setErrorFor(email,"Email cannot be blank"):isEmail(t)?setSuccessFor(email):setErrorFor(email,"Email is not valid"),""==n||null==n?setErrorFor(project,"Project cannot be blank"):n.length<=4?setErrorFor(project,"Project name should be more than 4 letters"):setSuccessFor(project),""==o||null==o?setErrorFor(message,"Project cannot be blank"):o.length<=10?setErrorFor(message,"Description should be more than 10 letters"):setSuccessFor(message)},setErrorFor=function(e,t){e=e.parentNode;e.querySelector("small").innerText=t,e.className="contact__content error"},setSuccessFor=function(e){e.parentNode.className="contact__content successful"},isEmail=function(e){return/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(e)},checkValues=function(){if(""==fullName.value||null==fullName.value||""==email.value||null==email.value||!isEmail(email.value)||""==project.value||null==project.value||project.value.length<=4||message.value.length<=4)return null;var e=document.getElementById("sendButton");e.classList.add("active"),setTimeout(function(){e.classList.add("success")},2770),setTimeout(function(){e.classList.remove("active"),e.classList.remove("success"),resetForm()},5e3),sendMail()},srTop=ScrollReveal({origin:"top",distance:"30px",duration:2e3,reset:!0});srTop.reveal(".home__data, .home__image, .home__social, .services__content, .project__title, .testimonial__container  ",{interval:200});var stBottom=ScrollReveal({origin:"bottom",distance:"40px",duration:3e3,reset:!0});stBottom.reveal(".portfolio__container, .footer__bg",{interval:100});var srLeft=ScrollReveal({origin:"left",distance:"30px",duration:3e3,reset:!0});srLeft.reveal(".about-images, .skills__container, .project__description, .contact__information",{interval:100});var srRight=ScrollReveal({origin:"right",distance:"40px",duration:3e3,reset:!0});srRight.reveal(".about__data, .qualification__container, .project__btn,.contact__form",{interval:100});