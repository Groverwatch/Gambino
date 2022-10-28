var tasks = [];
var html = ""
var planners = ["A", "B", "C"];
var colors = ["pink", "beige", "lightblue",];

tasks["A"] = [];
tasks["B"] = [];
tasks["C"] = [];

tasks["C"].push(new Task("Finish Painting", "24", "need to see"));
tasks["C"].push(new Task("Finish Painting", "24", "need to see"));
tasks["C"].push(new Task("Finish Painting", "31", "need to see"));
tasks["C"].push(new Task("Finish Painting", "31", "need to see"));
tasks["C"].push(new Task("Finish Painting", "31", "need to see"));
tasks["A"].push(new Task("Scam", "28/05/10", "need to see"));
tasks["A"].push(new Task("Scam", "28/05/10", "need to see"));
tasks["A"].push(new Task("Scam", "28/05/10", "need to see"));
tasks["B"].push(new Task("Taxi", "24/15/10", "need to see"));
tasks["B"].push(new Task("Taxi", "24/15/10", "need to see"));
tasks["B"].push(new Task("Taxi", "24/15/10", "need to see"));
tasks["B"].push(new Task("Taxi", "24/15/10", "need to see"));
tasks["B"].push(new Task("Taxi", "24/15/10", "need to see"));

function Task(name, dueDate, details) {
    this.name = name;
    this.dueDate = dueDate;
    this.details = details;
}

function displayTasks(planner, color) {
    for (i = 0; i < tasks[planner].length; i++) {
        html += `<aside class="task"> 
                    <button class="task-button" style="background-color: ${color}"> test </button>
                    <div class="task-text">
                        <h3> ${tasks[planner][0].name} </h3>
                        <p> ${planner}, ${tasks[planner][0].dueDate}, ${tasks[planner][0].details} </p>                    
                    </div>
                </aside>`
    }

    document.getElementById('list').innerHTML = html;
}

function run() {
    for (j = 0; j < planners.length; j++) {
        displayTasks(planners[j], colors[j]);
    }
}
