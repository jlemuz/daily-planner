
//Creates the date at the top of the form
var oneDate = moment();
var time = oneDate.format('dddd, MMMM Do');
document.querySelector('#currentDay').textContent = time;

console.log(oneDate.format('k'));

var times = document.getElementsByTagName("textarea");
var len = times.length;

for(i=0;i<len;i++){
    id = times[i].id;
     if(parseInt(id,10)<oneDate.format('k')){
        document.getElementById(id).setAttribute("class", "description past");
     }
     else if(parseInt(id,10)>oneDate.format('k')){
        console.log(id, oneDate.format('k'))
        document.getElementById(id).setAttribute("class", "description future");
     }
     else if (parseInt(id,10)==oneDate.format('k')){
        document.getElementById(id).setAttribute("class", "description present");
     }
};

var tasks = [];

$('.bi').click(function(){
    taskNum = $(this).attr('id').match(/\d+/)[0];
    task = $('#'+taskNum);
    localStorage.setItem(taskNum, task[0].value)
});