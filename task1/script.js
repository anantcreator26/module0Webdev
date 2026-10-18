
const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");

const count = images.length;
const angle = 360 / count;
const radius = 250;

images.forEach((img, i) => {
    img.style.transform =
        `rotateY(${i * angle}deg) translateZ(${radius}px)`;
});

let rotation = 0;

document.getElementById("next").addEventListener("click", () => {
    rotation -= angle;
    gallery.style.transform = `rotateY(${rotation}deg)`;
});

document.getElementById("prev").addEventListener("click", () => {
    rotation += angle;
    gallery.style.transform = `rotateY(${rotation}deg)`;
});
