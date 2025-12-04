const date = new Date(document.lastModified);

const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();

const formatted = `Last Updated: ${day}/${month}/${year}`;
document.getElementById("last-updated").textContent = formatted;

var buttons = document.querySelectorAll(".collapsible button");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
