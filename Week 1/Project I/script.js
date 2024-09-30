let select = document.getElementById("select");
let list = document.querySelector("#select ul");
let Category = document.getElementById("Category");
let options = document.getElementsByClassName("options");
let bar = document.getElementById("bar");

select.onclick = function () {
    list.classList.toggle("open");

}
for (option of options) {
    option.onclick = function () {
        Category.innerHTML = this.innerHTML;
        bar.placeholder = `Search In ${Category.innerHTML.trim()}`;


    }
}
