
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) :
[];
console.log(itemsArray);

function displayItems() {
    let items = "";

    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
            <div class="input-controller">
                <textarea disabled>${itemsArray[i]}</textarea>
                <div class="edit-controller">
                    <i class="fa-solid fa-check deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>`;
    }
    document.querySelector(".to-do-list").innerHTML = items;

    deleteItems();
    editingItems();
    saveItems();
    canceleditems();
}

function deleteItems() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    console.log(deleteBtn);
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteelement(i) ;});
    });
}

function deleteelement(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}


function editingItems()
{
    const editBtn = document.querySelectorAll(".editBtn");

    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            editElement(i);
        });
    });
}
function editElement(i) {
    const textarea = document.querySelectorAll(".input-controller textarea")[i];
    textarea.removeAttribute("disabled");
    const editController = document.querySelectorAll(".edit-controller")[i];
    const updateController = document.querySelectorAll(".update-controller")[i];
    editController.style.display = "none";
    updateController.style.display = "flex";

    console.log(`Editing element at index ${i}`);
}

function saveItems()
{
    const saveBtn = document.querySelectorAll(".saveBtn");
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            saveElement(i);
        });
    });
}

function saveElement(i){
    const textarea = document.querySelectorAll(".input-controller textarea")[i];
    const updatedValue = textarea.value;

    itemsArray[i] = updatedValue;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    textarea.setAttribute("disabled", "true");
    location.reload();
}
function canceleditems()
{
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const input = document.querySelectorAll(".input-controller textarea");
    const update = document.querySelectorAll(".update-controller");

    cancelBtn.forEach((cb, i) => {

        cb.addEventListener("click", () => {

            update[i].style.display = "none";
            input[i].desabled = true;

        });
    });

}
function additem()
{
    document.getElementById("enter").addEventListener("click", () => {

        const item = document.getElementById("item");

        createItem(item);
    });


}
function createItem(item)
{


    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();

}
function displayDate() {

    let date = new Date();
    date = date.toString().split(" ");

    document.getElementById("date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];

  }
function display(){

    window.onload = () => {

        displayDate();
        displayItems();
    };
}
function toDodList()
{
    console.log("ok");
    displayDate();
    display();
    additem();
    createItem();

}
export { toDodList};
