const inputName = document.querySelector(".name-input-field");
const inputDate = document.querySelector(".date-input-field");
const addButton = document.getElementById("addbtn");
const deleteButton = document.getElementById("deletebtn");
const todoList = document.querySelector(".todoList");
let listName = document.querySelector(".listName");
let listDate = document.querySelector(".listDate");
let listcheck = document.querySelector(".checkbox");
let arr = [];
let ids = 0;
let addTask = (e) => {
  let names = inputName.value;
  let date = inputDate.value;

  let createCheckBox = document.createElement("INPUT");
  createCheckBox.setAttribute("type", "checkbox");
  createCheckBox.setAttribute("class", "checkBox");
  createCheckBox.setAttribute("onclick", "selectedOne()");
  createCheckBox.setAttribute("checked", "false");
  createCheckBox.setAttribute("value", ids++);
  listcheck.appendChild(createCheckBox);

  let Createh3 = document.createElement("h3");
  Createh3.innerText = names;
  listName.appendChild(Createh3);

  let Createdateh3 = document.createElement("h3");
  Createdateh3.innerText = date;
  listDate.appendChild(Createdateh3);
};
let selectedOne = () => {
  //   arr.push(document.querySelector(".checkBox").getAttribute("value"));
  //   console.log(arr);
  document.querySelectorAll(".checkBox").forEach((val, ind) => {
    if (ind === val.value[ind]) {
      console.log("matched");
    } else {
      console.log("notmatched");
    }
  });
};

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTask(e);
});

deleteButton.addEventListener("click", () => {
  //   let selected = document.querySelector(".checkBox").id;
  //   console.log(selected);
  //   }
  // console.log(ind);
  //   });
});
