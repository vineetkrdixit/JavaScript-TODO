const inputName = document.querySelector(".name-input-field");
const inputDate = document.querySelector(".date-input-field");
const addButton = document.getElementById("addbtn");
const deleteButton = document.getElementById("deletebtn");
const todoList = document.querySelector(".todoList");
let arr = [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  let names = inputName.value;
  let date = inputDate.value;
  let tododata = {
    name: names,
    data: date,
  };
  arr.push(tododata);
  console.log(arr);
  arr.map((value, index) => {
    todoList.innerHTML = `<li>${value.name}</li>`;
  });
});
