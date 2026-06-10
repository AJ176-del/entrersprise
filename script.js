const heroImages = [

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg",
"images/hero4.jpg",
"images/hero5.jpg"

];

let current = 0;

const hero = document.querySelector(".hero");

setInterval(()=>{

current++;

if(current >= heroImages.length){

current = 0;

}

hero.style.backgroundImage =
`url(${heroImages[current]})`;

},4000);
