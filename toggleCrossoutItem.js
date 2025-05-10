const listItems = document.querySelectorAll("ul, li"); //The selector accepts the same method as specifing a selector in CSS. In this case, if you want to select specific listitems from an ordered list write: "ul, li"

function toggleDone(e) {
    if (!e.target.className){
        e.target.className = "done";
    }
    else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

