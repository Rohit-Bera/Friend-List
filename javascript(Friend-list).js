// function submit()
// {
//     var ul = document.getElementById("namelist");

//     var item = document.getElementById("item");

//     var li = document.createElement("li");

//     li.setAttribute("id",item.value);
//     li.appendChild(document.createTextNode(item.value));  //create text node is use to create text of node
//     ul.appendChild(li);

//     const cross = document.createElement("button");
//     cross.innerHTML='<i class="fas fa-times"></i>';
//     cross.classList.add("list-cross");
//     listdiv.appendChild(cross);
//}



//selectors

const input = document.querySelector("#input");
const button = document.querySelector("#subbutton");
const list = document.querySelector("#list");

//event-listner
button.addEventListener("click", enter);
list.addEventListener("click", tickcross);


//functions
function enter(event) {
    //div
    const listdiv = document.createElement("div");
    listdiv.classList.add("list-div");
    //list
    const listitem = document.createElement("li");
    listitem.innerText = input.value;
    listitem.classList.add("list-item");
    listdiv.appendChild(listitem);

    //star button
    const star = document.createElement("button");
    star.innerHTML = '<i class="far fa-star"></i>';
    star.classList.add("list-star");
    listdiv.appendChild(star);

    // cross button
    const cross = document.createElement("button");
    cross.innerHTML = '<i class="fas fa-times"></i>';
    cross.classList.add("list-cross");
    listdiv.appendChild(cross);

    list.appendChild(listdiv);

    input.value = ""; //will always empty the input element.

}

function tickcross(e) {
    const items = e.target;

    if (items.classList[0] === "list-cross") {
        
        const itemc = items.parentElement;
        itemc.classList.add("anime");
        itemc.addEventListener("transitionend", function () {
            itemc.remove();
        })
    }

    if (items.classList[0] === "list-star") {
        const itemt = items.parentElement;

        itemt.style.border = "10px solid orange";

        alert("close friend added");

    }

}


