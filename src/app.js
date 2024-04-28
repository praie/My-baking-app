function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

function freeRecipes() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (name.length > 0) {
    alert("Thank you," + name + " " + "! will be in touch");
  } else {
    alert("See you next time!");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let button = document.querySelector(".free-recipes");
button.addEventListener("click", freeRecipes);
