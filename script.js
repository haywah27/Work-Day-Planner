// display the current date in header
function displayCurrentDay(){
    // day of the week, month, day
    var date = moment().format("dddd, MMMM Do");

    // set the text in currentDay id to moment.js date
    $("#currentDay").text(date);
}
displayCurrentDay();

// display a real time clock
function displayCurrentTime(){
    // set the currentTime id text to moment.js hour:minute:second
    $('#currentTime').html(moment().format('hh:mm:ss'));
}
// run funciton every second
setInterval(displayCurrentTime, 1000);


// set color of textbox based on hour
function hourDisplay() {
    
    console.log(typeof(moment().format('HH')));


    // set currentHr to the current military hour via moment.js
    var currentHr = parseInt(moment().format('HH'));
    // console.log(typeof(moment().format('HH')))
   
    // for each row associated with class timeBlock, do these things:
    $(".time-block").each(function() {
        // get id name and turn it into a readable number
        var hourRow = parseInt($(this).attr("id"));
        
        // turn grey if current hour is greater than the hour row
        if (currentHr > hourRow) {
            $(this).addClass("past");
        }
        
        // turn red if its the current hour
        else if (currentHr === hourRow) {
            $(this).addClass("present");
        }

        // turn green if the current hour has not occur3red
        else {
            $(this).addClass("future");
        }
    })
}
hourDisplay();


function displayLocalStorage() {
    // for each row associated with class timeBlock, do these things:
    $(".time-block").each(function () {
        // get id name (string) and turn it into a number
        var localSavedRow = parseInt($(this).attr("id"));
        // console.log(localRow);

        // get the .description class(text box) of the hour id from local storage via when user saved and display it 
        var localDisplay = $("#" + JSON.stringify(localSavedRow) + " .description").val(localStorage.getItem(localSavedRow));
        // console.log(localDisplay);

        return(localDisplay);
    })
 }
 displayLocalStorage();



// do these things when save button clicked:
$(".saveBtn").click(function() {
    // console.log(this);
   
    var hourSave = $(this).parent().attr("id");
    // console.log(hourSave);

    // .siblings will return the value within description class (what the user wrote in textarea) 
    var inputSave= $(this).siblings(".description").val();
    // console.log(inputSave);

    // save a key value pair of "hour: input" when save button clicked on respective row
    localStorage.setItem(hourSave, inputSave);
  
 })

// clear local storage and refresh page if this button clicked
 $(".btn-danger").click(function() {
    console.log(this);
    localStorage.clear();
    document.location.reload();
 
  
 })
 