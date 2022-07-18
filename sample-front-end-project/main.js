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
  {
    name: 'Mohamed Zakaria',
    img: 'assets/mharb.webp',
    info: 'CSEN student @ the GUC',
  },
  {
    name: 'Almoatasem Belah ',
    img: 'assets/mharb.webp',
    info: 'QA intern at Cegedim',
  },
  {
    name: 'Hashem Yehia',
    img: 'assets/mharb.webp',
    info: 'Computer Science student',
  },
  {
    name: 'MostafaEsmail5',
    img: 'https://imgs.search.brave.com/uWySc1aj3JGNM8ymHEb8zjZMKRVBVQDG303z39YseLs/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/eDZYak1idUN2b3Ez/RVFOZ0pveUVRSGFG/aiZwaWQ9QXBp',
    info: 'Someone else',
  },

  {
    name: 'Amr Essam',
    img: 'assets/mharb.webp',
    info: 'Hello',
  },
  {
    name: 'Ahmed Elsayed',
    img: 'assets/pro.jpg',
    info: 'Hi, CE',
  },
]

function updateCard(id) {
  const selectedData = cardData[id]

  cardImg.src = selectedData.img
  cardName.innerHTML = selectedData.name
  cardInfo.innerHTML = selectedData.info
}
