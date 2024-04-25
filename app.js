const userInput = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const btnClear = document.querySelector(".clear");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = userInput.value;
  if (inputValue === "") {
    alert("Please Enter A Name");
  } else {
    getData(inputValue);
  }
  userInput.value = "";
});

async function getData(user) {
  list.innerHTML = " ";
  const res = await fetch(`https://api.github.com/search/users?q=${user}`);
  const data = await res.json();
  let arrayData = data.items;
  arrayData.forEach((user) => {
    list.innerHTML += `<div><img src='${user.avatar_url}'><li>${user.login}</li>
                <a class='view'href='${user.html_url}'>VIEW PAGE</a></div>`;
  });
}

btnClear.addEventListener("click", function () {
  list.innerHTML = " ";
  userInput.value = "";
});
