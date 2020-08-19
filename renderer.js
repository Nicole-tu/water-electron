// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const ageElm = document.getElementById('age')
const weightElm = document.getElementById('weight')
const totalAmountElm = document.getElementById('totalAmount')
const waterElm = document.getElementsByClassName('water')


const calculateAmount = () => {

  if (ageElm.value.trim() == '' || weightElm.value.trim() == '') {
    alert('Please input data');
    return;
  }
  if (ageElm.value < 30) {
    totalAmountElm.value = weightElm.value * 40
  } else if (ageElm.value >= 30 && ageElm.value <= 55) {
    totalAmountElm.value = weightElm.value * 35
  } else if (ageElm.value > 55) {
    totalAmountElm.value = weightElm.value * 30
  }
}

const addWater = () => {
  waterElm[0].classList.add('water-full');
  waterElm[0].classList.add('active');
}
