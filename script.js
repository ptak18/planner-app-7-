// The app should:

// Display the current day at the top of the calender when a user opens the planner.
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));

 

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

