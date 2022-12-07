function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_nome").value;
    var listItem = document.createElement("li");
    
    if(text.length === 0){
        alert('Digite uma tarefa!')
        return;
    }

    listItem.className = "list-item";
    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

    document.getElementById("task_nome").value = "";    

}

function openNav(){
  document.getElementById("myNav").style.width = '100%';  
}

function closeNav(){
    document.getElementById("myNav").style.width = '0'; 

}