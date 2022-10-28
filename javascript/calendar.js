var html = "";
var date = new Date;

function displayCalendar(month, year) {    
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const daysToMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysAfterMonth = 42 - (daysToMonth + daysInMonth);
    
    var html = ""; 

    for (i = 0; i < days.length; i++) {
        html +=  `<div> ${days[i]} </div>`;
    }

    for (i = 1; i < daysToMonth; i++) {
        html +=  `<div class="day"> </div>`;
        document.getElementById('calendar').innerHTML = html;
    }

    for (i = 0; i < daysInMonth+1; i++) {
        if (i == date.getDate() && date.getMonth() == month && date.getFullYear() == year) {
            html +=  `<div class="day"> <h3 style="color: red;"> ${i+1} </h3> </div>`;
        }

        else {
            html +=  `<div class="day"> <h3> ${i+1} </h3> </div>`;
        }
    }

    for (i = 0; i < daysAfterMonth; i++) {
        html +=  `<div class="day"> </div>`;
    }

    document.getElementById('calendar').innerHTML = html;

    html = "";
}