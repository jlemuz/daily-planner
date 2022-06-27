# Work Day Scheduler Starter Code


## Description  
This project implements moment.js for time formatting, jquery for functionality and local storage.

## Logic Implemented  
The way this project was set up was by assigning the time blocks the 24 hour id. So 5pm time block had an id of 17, that way it would be easy to compare the current hour with the hour blocks.
Thus, by using this comparison the correct past, present or future classes could be added to the time blocks.
Additionally, the save buttons were assigned a similar id convention, e.g. "text-17" to associate the save button with the corresponding time block id.
The number was parsed out of the sve button and then the corresponding time id value was saved to local storage.
To populate from local storage, the same id convention was used.
Since the values are saved to local storage, the fields are populated each time the page is reopened or refreshed.

## Demo
<img src="./assets/images/demo.gif">

## Deployed Link
https://jlemuz.github.io/daily-planner/