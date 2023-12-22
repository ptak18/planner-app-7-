// The app should:

// Display the current day at the top of the calender when a user opens the planner.
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
var currentHour = today.format("H");
console.log(currentHour);
for (let index = 9; index < array.length; index++) {
  var currentDiv = $("#hour-" + index);

  if (index > currentHour) {
    currentDiv.addClass("future");
    currentDiv.removeClass("past");
    currentDiv.removeClass("present");
  } else if ((index = currentHour)) {
    currentDiv.addClass("present");
    currentDiv.removeClass("past");
    currentDiv.removeClass("future");
  } else if (index < currentHour) {
    currentDiv.addClass("past");
    currentDiv.removeClass("future");
    currentDiv.removeClass("present");
  }
}
// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page
