
//Creates the date at the top of the form
var oneDate = moment();
var time = oneDate.format('dddd, MMMM Do');
document.querySelector('#currentDay').textContent = time;

//Gets the hour
oneDate.format('k');

var times = document.getElementsByTagName("textarea");
var len = times.length;

//Compares the id of every description block against the current hour to set the class property
for(i=0;i<len;i++){
    id = times[i].id;
     if(parseInt(id,10)<oneDate.format('k')){
        document.getElementById(id).setAttribute("class", "description past");
     }
     else if(parseInt(id,10)>oneDate.format('k')){
        document.getElementById(id).setAttribute("class", "description future");
     }
     else if (parseInt(id,10)==oneDate.format('k')){
        document.getElementById(id).setAttribute("class", "description present");
     }
};


$('.bi').click(function(){
    //Parses out the id from the save button id and gets the corresponding id value
    //Since each description field has a numerical id, the value of that id will be saved to local storage
    taskNum = $(this).attr('id').match(/\d+/)[0];
    task = $('#'+taskNum);
    //Need task[0] since the id tag returns an object
    localStorage.setItem(taskNum, task[0].value)
});

for(i=0;i<$('textarea').length;i++){
    //Takes the textarea id and gets the corresponding localstorage value which is also 
    //saved based on the corresponding id value
    $('textarea')[i].textContent = localStorage.getItem($('textarea')[i].id)

}