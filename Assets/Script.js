//Showing the current date in the header//
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd MMMM Do YYYY"));

//color coding the hours by past, future and present//
var inputBlock =document.querySelectorAll(".time-block-input past future present");
inputBlock = moment().format("HH")

var currentHour = moment().format("HH")

moment().isbefore();
document.querySelector(".past");


//if (inputBlock) {
    // Compares row id to current hour and sets color accordingly
   // if (currentHour === inputBlock) {
     //   document.querySelector(".present");
    //} else if ((currentHour < inputBlock) || (currentHour > inputBlock - 6)) {
       // document.querySelector(".future");
     // } else if ((currentHour > inputBlock) || (currentHour < inputBlock + 6)) {
     //   document.querySelector(".past");
     // } else {
     //   document.querySelector(".past");
    //  }
//};