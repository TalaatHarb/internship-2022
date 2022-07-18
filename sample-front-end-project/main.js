const cardImg = document.querySelector(".card-img");
const cardName = document.querySelector(".card-name");
const cardInfo = document.querySelector(".card-info");

const cardData = [
  { name: "M. Talaat Harb", img: "assets/mharb.webp", info: "TL of Cairo 6 from the Maiia Gestion team" },
  { name: "Mohamed Zakaria", img: "assets/mharb.webp", info: "CSEN Student @ the GUC" },
  { name: "Hashem Yehia", img: "assets/mharb.webp", info: "Computer Science Student" },
  { name: "Ahmed rashidy", img: "assets/mharb.webp", info: "trainee" },
  { name: "Mostafa Esmail", img: "assets/mharb.webp", info: "SomeoneElse" },

];

function updateCard(id) {
  const selectedData = cardData[id];

  cardImg.src = selectedData.img;
  cardName.innerHTML = selectedData.name;
  cardInfo.innerHTML = selectedData.info;
}
