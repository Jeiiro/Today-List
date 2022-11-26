console.log("test");
let task = [];
let divid = 1;
function addElement(entry) {
  task.push(divid);
  console.log(task[task.length - 1]);
  let newdiv = document.createElement("div");
  newdiv.setAttribute("id", `div_${task[task.length - 1]}`);
  newdiv.classList.add("newdiv");
  let newcontent = document.createTextNode(entry);
  newdiv.appendChild(newcontent);
  let currentdiv = document.getElementById("taches");
  currentdiv.appendChild(newdiv);
  divid++;
}
function addonclick(id) {
  document.querySelector(`#div_${id}`).addEventListener("click", () => {
    console.log("click div_" + id);
    document.getElementById(`div_${id}`).remove(id);
  });
}
document.getElementById("push").addEventListener("click", () => {
  console.log("click");

  if (document.getElementById("task").value.length === 0) {
    alert("Attention ! Il faut remplir une tâche à faire !");
  } else {
    addElement(document.getElementById("task").value);
    addonclick(task[task.length - 1]);
    console.log(task);
  }
});
