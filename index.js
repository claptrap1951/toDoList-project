const toDoForm = document.getElementById ("toDoForm");
const list = document.getElementById ("list");

toDoForm.addEventListener ("submit", function(event){
    event.preventDefault();
    
    const item = event.target.item.value;
    const li = document.createElement("li");
    li.innerHTML = item;
    
    list.append(li);
    event.target.item.value = "";
});


                           
