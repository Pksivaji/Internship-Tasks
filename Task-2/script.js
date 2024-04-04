function addTask(event) {
    event.preventDefault();
    let taskTxt = document.getElementById("taskTxt");
    let task = taskTxt.value;
    let notification = document.getElementById("notification");
    notification.style.color="red";
    if (task === "") {
      notification.innerHTML = "Enter today task";
      return false;
    }
    notification.innerHTML = "";
    let tbl = document.getElementById("tasksTbl").getElementsByTagName('tbody')[0];
    let newRow = tbl.insertRow();
    let doneCell = newRow.insertCell(0);
    let taskCell = newRow.insertCell(1);
    let delCell = newRow.insertCell(2);
    let compCell = newRow.insertCell(3);
    taskCell.innerHTML = task;
    delCell.innerHTML = "<input type='button' value='Delete' onclick='deleteTask(this)' />";
    compCell.innerHTML = "<input type='button' value='Completed' onclick='completeTask(this)' />";
    taskTxt.value = "";
  }

  function deleteTask(elm) {
    let i = elm.parentNode.parentNode.rowIndex;
    document.getElementById("tasksTbl").deleteRow(i);
  }

  function completeTask(elm) {
    let currentRow = elm.parentNode.parentNode;
    let comp = currentRow.cells[0];
    comp.innerHTML = "<svg class='bi bi-check-circle-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>\
<path fill-rule='evenodd' d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/>\
</svg>";
  }

  function clearStorage() {
  let notification = document.getElementById("notification").innerHTML="";
  let tbl = document.getElementById("tasksTbl");
  let taskTxt = document.getElementById("taskTxt").value="";

  while (tbl.rows.length > 1) {
      tbl.deleteRow(1);
  }
 }