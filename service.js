let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


let imag = document.getElementById("imge");
let images =["img/pexels-photo1.jpeg","img/pexels-photo2.jpeg","img/pexels-photo3.jpeg"];
setInterval(function() {
    let random = Math.floor(Math.random() * images.length); // Corrected typo
    imag.src = images[random]; // Set the random image source
}, 800);
