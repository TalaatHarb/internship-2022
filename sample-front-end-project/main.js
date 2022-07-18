const cardImg = document.querySelector('.card-img')
const cardName = document.querySelector('.card-name')
const cardInfo = document.querySelector('.card-info')

const cardData = [
  {
    name: 'M. Talaat Harb',
    img: 'assets/mharb.webp',
    info: 'TL of Cairo 6 from the Maiia Gestion team',
  },
  { name: 'Mohamed Gado', img: 'assets/mharb.webp', info: 'Sadge' },
  { name: 'Almoatasem Belah', img: 'assets/mharb.webp', info: 'QA intern' },
  //heiii
  {
    name: 'Hashem Yehia',
    img: 'assets/mharb.webp',
    info: 'Computer Science student',
  },
  // ehhhhhh
]

function updateCard(id) {
  const selectedData = cardData[id]

  cardImg.src = selectedData.img
  cardName.innerHTML = selectedData.name
  cardInfo.innerHTML = selectedData.info
}
