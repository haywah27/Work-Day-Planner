var saveButton = document.querySelector(".saveBtn");
var dayEl = document.querySelector("#currentDay");
// day of the week, month, day
var date = moment().format("dddd, MMMM Do");

// display current date in header
function displayCurrentDay(){
    // dayEl.innerHTML = date;
    $(dayEl).text(date);
}

displayCurrentDay();


// set color of textbox based on hour
function hourDisplay() {
    // get current hour through moment.js
    var currentHr = moment().hour();

    // for each row associated with class timeBlock, do these things:
    $(".time-block").each(function () {
        // get id name and turn it into a readable number
        var hourRow = parseInt($(this).attr("id"));
        
        // console.log(this)
        // turn grey if current hour is greater than the hour row (we have moved past that hour block)
        if (currentHr > hourRow) {
            $(this).addClass("past");
        }
        
        // turn red if its the current hour
        else if (currentHr === hourRow) {
            $(this).addClass("present");
        }

        // turn green if the current hour has not occured
        else {
            $(this).addClass("future");
        }
    })
}
hourDisplay();