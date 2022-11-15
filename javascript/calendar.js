var html = "";
var date = new Date;

function displayCalendar(month, year) {    
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const daysToMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const daysAfterMonth = 43 - (daysToMonth + daysInMonth);

    var html = ""; 

    for (i = 0; i < days.length; i++) {
        html +=  `<div> ${days[i]} </div>`;
    }

    for (i = 0; i < daysToMonth-1; i++) {
        html +=  `<div class="day"> </div>`;
        document.getElementById('calendar').innerHTML = html;
    }

    for (i = 1; i < daysInMonth+1; i++) {
        if (i == date.getDate() && date.getMonth() == month && date.getFullYear() == year) {
            html +=  `<div class="day"> <h3 style="color: red;"> ${i} </h3> </div>`;
        }

        else {
            html +=  `<div class="day"> <h3> ${i} </h3>`;

            for (k = 0; k < tasks["School"].length; k++) {
                if (`${i}` == tasks["School"][k].dueDate) {
                    html += `<p class="day-task" style="background-color: pink;"> ${tasks["School"][k].name} </p>`;
                }
            }

            for (k = 0; k < tasks["A"].length; k++) {
                if (`${i}` == tasks["A"][k].dueDate) {
                    html += `<p class="day-task" style="background-color: beige;"> ${tasks["A"][k].name} </p>`;
                }
            }

            for (k = 0; k < tasks["B"].length; k++) {
                if (`${i}` == tasks["B"][k].dueDate) {
                    html += `<p class="day-task" style="background-color: lightblue;"> ${tasks["B"][k].name} </p>`;
                }
            }

            html +=  `</div>`;
        }
    }

    for (i = 0; i < daysAfterMonth; i++) {
        html +=  `<div class="day"> </div>`;
    }

    document.getElementById('calendar').innerHTML = html;

    html = "";
}