const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input?.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addItem();
})

function addItem (){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fa-solid fa-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("mouseover", () =>{
        checkIcon.style.color = "darkgreen";
    })
    checkIcon.addEventListener("click", function() {
        checkIcon.style.color = "limegreen";
    })
    checkIcon.addEventListener("mouseout", () => {
        checkIcon.style.color = "lightgray";
        if ("click"){
            checkIcon.style.color = "limegreen";
        }
    })
    checkIcon.addEventListener("click", function() {
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("mouseover", function(){
        trashIcon.style.color = "red";
    })
    trashIcon.addEventListener("mouseout", function(){
        trashIcon.style.color = "lightgray";    
    })
    trashIcon.addEventListener("click", function(){
        trashIcon.style.color = "red";
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}   