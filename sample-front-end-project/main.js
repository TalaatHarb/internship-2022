const cardImg = document.querySelector(".card-img");
const cardName = document.querySelector(".card-name");
const cardInfo = document.querySelector(".card-info");

const cardData = [
  { name: "M. Talaat Harb", img: "assets/mharb.webp", info: "TL of Cairo 6 from the Maiia Gestion team" },
  { name: "Ahmed Elsayed", img: "assets/profile-vector.png", info: "It is me, Ahmed Elsayed, study at NU" },
  
];

function updateCard(id) {
  const selectedData = cardData[id];

  cardImg.src = selectedData.img;
  cardName.innerHTML = selectedData.name;
  cardInfo.innerHTML = selectedData.info;
}
