const photoGallery = document.getElementById("photoGallery");

const openList = '<li id="photo';
const closeList = "</li>";
const openCaptionTag = '<div class="caption">';
const closeCaptionTag = "</div>";
const openDescTag = '<div class="description">';
const closeDescTag = "</div>";

const images = [
  "images/pet1.jpg",
  "images/pet2.jpg",
  "images/pet3.jpg",
  "images/pet4.jpg",
  "images/pet5.jpg",
  "images/pet6.jpg",
  "images/pet7.jpg",
  "images/pet8.jpg",
  "images/pet9.jpg",
  "images/pet10.jpg",
];

const captionTexts = [
  "Max",
  "Lola",
  "Rocky",
  "Sadie",
  "Winston",
  "Bella",
  "Bailey",
  "Zeus",
  "Luna",
  "Oscar",
];

const descTexts = [
  "Max is a friendly and energetic Labrador Retriever known for his boundless enthusiasm and loyalty.",
  "Lola is an adorable French Bulldog with expressive ears and a playful personality that charms everyone she meets.",
  "Rocky is a courageous and intelligent German Shepherd who's always ready for adventure and eager to protect his loved ones.",
  "Sadie is a gentle and loving Golden Retriever who adores fetching tennis balls and cuddling on the couch.",
  "Winston, the Bulldog, is known for his wrinkled face and calm demeanor, making him a perfect companion for lazy afternoons.",
  "Bella, the graceful Poodle, is not only elegant but also highly intelligent and excels in canine sports like agility.",
  "Bailey is a curious and friendly Beagle with a nose for adventure and a love for sniffing out hidden treats.",
  "Zeus is a strong and protective Rottweiler who is fiercely loyal to his family and always ready to defend them.",
  "Luna, the German Shorthaired Pointer, is an energetic and agile companion for outdoor enthusiasts who love to go on hikes and runs.",
  "Oscar, the Dachshund, may be small in stature but is big on personality, known for his playful antics and distinctive long body shape.",
];

//Info Box

for (let i = 0; i < images.length; i++) {
  const imgElement = `<img src="${images[i]}" class="photo">`;
  const captionElement = `${openCaptionTag}${captionTexts[i]}${closeCaptionTag}`;
  const descElement = `${openDescTag}${descTexts[i]}${closeDescTag}`;

  photoGallery.innerHTML += `${openList}${
    i + 1
  }">${imgElement}${captionElement}${descElement}${closeList}`;
}

const infoBox = document.getElementById("infoBox");
const infoHeading = document.getElementById("infoHeading");
const infoText = document.getElementById("infoText");
const closeInfoBoxLink = document.getElementById("closeInfoBox");

closeInfoBoxLink.addEventListener("click", function (e) {
  e.preventDefault();
  infoBox.style.visibility = "hidden";
});

const additionalInfoTexts = [
  "Max loves playing fetch.",
  "Lola enjoys sunbathing.",
  "Rocky is a trained guard dog.",
  "Sadie loves to be petted.",
  "Winston enjoys afternoon naps.",
  "Bella is good at agility training.",
  "Bailey loves sniffing out treats.",
  "Zeus is protective of his family.",
  "Luna loves going on hikes.",
  "Oscar enjoys digging in the garden.",
];

photoGallery.addEventListener("click", function (e) {
  if (e.target.classList.contains("description")) {
    const index = parseInt(e.target.parentElement.id.replace("photo", "")) - 1;
    infoHeading.innerHTML = captionTexts[index];
    infoText.innerHTML = additionalInfoTexts[index];
    infoBox.style.visibility = "visible";
  }
});
