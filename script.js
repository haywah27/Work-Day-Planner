var saveButton = document.querySelector(".saveBtn");
var dayEl = document.querySelector("#currentDay");
// day of the week, month, date
var date = moment().format("dddd, MMMM Do");

// display current date in header
function displayCurrentDay(){
    dayEl.innerHTML = date;
}

displayCurrentDay();


$(document).ready(function() { 

    // console log if button clicked
    $(".saveBtn").on("click", function () {
        console.log("button clicked");
    })
    
})