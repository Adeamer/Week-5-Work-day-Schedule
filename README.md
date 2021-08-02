**Week 5- Work Day Planner**


This web application allows the user to keep track of the activities throughout the day. This is done by having an interacting web page that gives the user input bars on each hour of the day. Once the user has input their activity then they can save this and have the data persisted once the page is refreshed.


User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
**I created a header using bootstraps' jumbotron class. Inside the header I have Id'd a <p> as "current Day" then in my JS file I have used moment.js to format the current day every time the user enter my web page.**

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
**This was achieved by created div blocks for each hour of the day in the html file.**

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, 
present, or future
**This was achieved by running a for loop with a if/else condidtional statement inside it that was basically changing the color of the input box in comparison to the current time.**

WHEN I click into a timeblock
THEN I can enter an event
**Inside the div blocks for each hour there is a input element which is for the user to input their acitivity into, This input bar will also change color based on the time.**

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
**I did this by setting the input value to local storage via setItem in my JS.**

WHEN I refresh the page
THEN the saved events persist
**This was achieved by getItem and appending it to the element that the input was saved to.**

Here is the link to my deployed application: https://adeamer.github.io/Week-5-Work-day-Schedule/

Here is a screen grab from my deployed application:
![image](https://user-images.githubusercontent.com/83004232/127754750-0492f1f6-5b07-4e2d-9001-92c0d9462e56.png)


![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/83004232/127866513-f28da46e-bc1f-4287-bf4c-bf38f8751b30.gif)
