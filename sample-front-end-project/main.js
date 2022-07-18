const cardImg = document.querySelector('.card-img')
const cardName = document.querySelector('.card-name')
const cardInfo = document.querySelector('.card-info')

const cardData = [

  { name: "M. Talaat Harb", img: "assets/mharb.webp", info: "TL of Cairo 6 from the Maiia Gestion team" },
  { name: "Mohamed Zakaria", img: "assets/mharb.webp", info: "CSEN student @ the GUC" },
  { name: 'Mohamed Gado', img: 'assets/mharb.webp', info: 'Sadge' },
  { name: 'Almoatasem Belah', img: 'assets/mharb.webp', info: 'QA intern' },
  //heiii
<<<<<<< HEAD

  { name: 'Hashem Yehia', img: 'assets/mharb.webp', info: 'Computer Science student' },
=======
  { name: 'Hashem Yehia', img: 'assets/mharb.webp', info: 'Computer Science student' },
  // ehhhhhh
>>>>>>> cf592210d27081db8894c1e1f496a8044b64c517
]


function updateCard(id) {
  const selectedData = cardData[id]

  cardImg.src = selectedData.img
  cardName.innerHTML = selectedData.name
  cardInfo.innerHTML = selectedData.info
}
