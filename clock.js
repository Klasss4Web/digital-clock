//Display The The Clock When The Page Just Loaded
document.addEventListener('DOMContentLoaded', function() {
  let currentTime = document.getElementById('currentTime');

  setInterval(updateTime, 1000)

  function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = 'AM'
    if(hours > 12) {
      hours -= 12;
      ampm = 'PM';
    }

    let sep = ':';
    
    if(seconds % 2 === 1) { 
      sep = ' '; 
    }
    currentTime.innerHTML = hours + sep + minutes + ampm;
  }

  
})