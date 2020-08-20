// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const ageElm = document.getElementById('age')
const weightElm = document.getElementById('weight')
const totalAmountElm = document.getElementById('totalAmount')


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
  addWater(0);
}

const addWater = (value) => {
  const waveElm = document.querySelector('.wave');
  let waterHeight = parseInt(waveElm.style.height.split('%')[0] == '' ? 0 : waveElm.style.height.split('%')[0]);

  if (waterHeight <= 10) {
    waveElm.style.bottom = '0%';
  } else {
    waveElm.style.bottom = '-4%';
  }

  if (waterHeight == 0) {
    waveElm.style.height = value.toString() + '%';
  } else if (waterHeight >= 100) {
    waveElm.style.height = '105%';
    waveElm.classList.add('wave-in');
    return;
  } else {
    waveElm.style.height = (waterHeight + value).toString() + '%';
  }
}
