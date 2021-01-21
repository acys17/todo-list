const input = document.querySelector(".input-box");
const form = document.querySelector("form")
const listText = document.querySelector(".to-do-list");
const clear = document.querySelector(".clear");
let listItems = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    listItems.push(input.value)
    listText.innerHTML = "";
    listText.innerHTML += listItems.map(item => {
        return `<li class="list-item">${item}</li>`
    }).join('');
    form.reset();
    (Array.from(listText.children)).forEach(item => {
        item.addEventListener("click", (e) => {
            let lineThrough = e.target.style;
            if(lineThrough.textDecoration !== "line-through")
                lineThrough.textDecoration = "line-through";
            else {
                lineThrough.textDecoration = "none";
            }
        })
    })
})

clear.addEventListener("click", () => {
    window.location.reload();
})