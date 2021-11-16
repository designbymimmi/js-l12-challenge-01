const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  let res = await fetch("https://picsum.photos/v2/list?limit=100");
  let images = await res.json();
  selectRandomImage(images);
};

const selectRandomImage = function (images) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  let author = randomImage["author"];
  let imageAddress = randomImage["download_url"];
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
  getImage();
})
