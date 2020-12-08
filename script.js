var dayEl = document.querySelector("#currentDay");
// var NowMoment = moment();
var date = moment().format('LTS');


function displayCurrentDay(){
    dayEl.innerHTML = date;
}

displayCurrentDay();