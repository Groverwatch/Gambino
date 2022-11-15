var tasks = [];
var html = "";
var planners = ["School", "B", "A", "N/A"];
var colors = ["pink", "beige", "lightblue",];

tasks["N/A"] = [];
tasks["School"] = [];
tasks["B"] = [];
tasks["A"] = [];

tasks["School"].push(new Task("Accounting Exam", "8", "2:00 - 4:15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));
tasks["School"].push(new Task("Computing Exam", "11", "3.00 - 5.15pm"));

function Task(name, dueDate, details) {
    this.name = name;
    this.dueDate = dueDate;
    this.details = details;
}

function displayTasks(planner, color) {
    for (i = 0; i < tasks[planner].length; i++) {
        html += `<aside class="task"> 
                    <button class="task-button" style="background-color: ${color}"> </button>
                    <div class="task-text">
                        <h3> ${tasks[planner][i].name} </h3>
                        <p> ${planner}, ${tasks[planner][i].dueDate}, ${tasks[planner][i].details} </p>                    
                    </div>
                </aside>`
        document.getElementById('list').innerHTML = html;
    }

    html = "";
}

function run() {
    for (j = 0; j < planners.length; j++) {
        displayTasks(planners[j], colors[j]);
    }
}

let size = 0;
for (key in tasks) {
     if (tasks.hasOwnProperty(key)) {
        size++;
        console.log(size);
    }
}

function addTask(input) {
    if (event.key == 'Enter') {
        var name = document.getElementById(input).value;

        tasks["N/A"].push(new Task(name, "", ""));
        
        displayTasks("School", colors[0]);
    }
}