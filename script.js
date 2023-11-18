let input = document.getElementById("list-content")
let unorder = document.getElementById("unordered-list")


function addItem(){
    let content = input.value
    let newList = document.createElement("li")
    newList.innerHTML = content + "<button onclick='deleteItem(event)'>Delete</button>"
    unorder.append(newList)
}


function deleteItem(event) {

    event.target.parentElement.remove()
    
}