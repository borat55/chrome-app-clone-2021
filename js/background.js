const images = ["IMG_4044.JPG","IMG_7729.JPG","볼리비아.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);