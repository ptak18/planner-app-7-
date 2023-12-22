// The app should:

// Display the current day at the top of the calender when a user opens the planner.
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
var currentHour = today.format("H");
console.log(currentHour);
for (let index = 9; index < 18; index++) {
  var currentDiv = $("#hour-" + index);

  if (index > currentHour) {
    currentDiv.addClass("future");
   
  } else if ((index == currentHour)) {
    currentDiv.addClass("present");
   
  } else if (index < currentHour) {
    currentDiv.addClass("past");
   
  }
}
// Save the event in local storage when the save button is clicked in that timeblock.
function handleSaveClick(){
    var text = $(this).siblings(".description").val();
    console.log(text)
    //todo:
    //add the value of text to local storage
}

$(".saveBtn").on("click", handleSaveClick);

// Persist events between refreshes of a page
//get value from local storage and update text area 