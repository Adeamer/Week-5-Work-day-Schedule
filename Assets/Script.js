//Showing the current date in the header//
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd MMMM Do YYYY"));

//color coding the hours by past, future and present//
var inputBoxes = document.querySelectorAll(".time-block-input");
var test = moment().format("HH")

var currentHour = moment().format("HH")

$(document.querySelector(".past"));
$(document.querySelector(".present"));
$(document.querySelector(".future"));

// Compares row id to current hour and sets color accordingly
for(var i=0; i < inputBoxes.length; i++) {
  var storageItem = getSavedValue(inputBoxes[i]);
    
    if(storageItem !== false){
      inputBoxes[i].value= storageItem;
    }

   if (currentHour === inputBoxes[i]) {
     console.log(inputBoxes[i]);
       inputBoxes[i].getAttribute('data-time')
       inputBoxes[i].classList.add("present");
       inputBoxes[i].classList.remove("future");
       inputBoxes[i].classList.remove("past");
   } else if ((currentHour < test) || (currentHour > test - 6)) {
       inputBoxes[i].getAttribute('data-time')
       inputBoxes[i].classList.add("future");
       inputBoxes[i].classList.remove("present");
       inputBoxes[i].classList.remove("past");
     } else if ((currentHour > test) || (currentHour < test + 6)) {
       inputBoxes[i].getAttribute('data-time')
       inputBoxes[i].classList.add("past");
       inputBoxes[i].classList.remove("future");
       inputBoxes[i].classList.remove("present");
     } else {
       inputBoxes[i].getAttribute('data-time')
       inputBoxes[i].classList.add("past");
       inputBoxes[i].classList.remove("future");
       inputBoxes[i].classList.remove("present");
     }
  
};

//when button is clicked then the it will save the input text to local storage and parist once the page is refreshed.


function handleSave(key){
  var timeValue = document.getElementById(key).value
  localStorage.setItem(key,timeValue);
}

function getSavedValue(string){
  if (!localStorage.getItem(string.id)) {
      return false;
  }
  return localStorage.getItem(string.id);
}