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



// console log if button clicked
$(".saveBtn").click(function () {
    // need row info (hour) *parent
    // need user info box input *not child?? sibling???
    // need to save to local storage
    // console.log(this);
   
    var hourSave = $(this).parent().attr("id");
    // .val is used to return the value of class description
    var inputSave= $(this).siblings(".description").val();
    // console.log(parent_id);
   
   
    // console.log(sibling_id);
    // console.log(hourSave, inputSave);
    // save a key value pair of hour: input when save button clicked on respective row
    localStorage.setItem(hourSave, inputSave);
    // YAAAAAAAASSS!!!!!!!
 })
 