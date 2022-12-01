function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_nome").value;
    var listItem = document.createElement("li");
    listItem.className = "list-item";

    if(text.length === 0){
        alert('Digite uma tarefa!')
        return;
    }

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}