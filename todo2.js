const addbtn = document.getElementById("add");
let input = document.getElementById("new-item");
let unorderlist = document.getElementById("list");
let count = document.getElementById("count");
let totaltask=0;
let todocont = document.getElementById("todo-cont");

//---Add task----//

addbtn.addEventListener("click",()=>{
    let task = input.value;
    if(task===""){
        alert("Task cannot be empty");
    }
    else{
        let list = document.createElement("li");
        list.id= `${totaltask}`;
        list.innerHTML = `<div class="list-cont"><div class="list-cont"><input type="checkbox" class="checkbox">${task}</div><button class="remove">X</button></div>`;
        totaltask++;
        list.classList.add("items");
        unorderlist.append(list);
        count.textContent = totaltask;
        input.value="";

        //-----Remove task-----//

        const removebtn = list.getElementsByClassName("remove");
        for(let i=0; i<removebtn.length; i++){
            removebtn[i].addEventListener("click", ()=>{
                let listremove = removebtn[i].parentNode.parentNode;
                listremove.remove();
                totaltask--;
                count.textContent = totaltask;
            });
        }

    }

});






