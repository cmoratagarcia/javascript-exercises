const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let enteredItem = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  li.appendChild(span);
  span.textContent = enteredItem;
  li.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  list.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  input.focus();
});
