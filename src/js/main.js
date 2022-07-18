let menu = document.getElementById('menu-check');

menu.addEventListener("click", () => {
  if (menu.checked) {
    document.getElementById("nav").style.visibility = "visible";
  } else {
    document.getElementById("nav").style.visibility = "hidden";
  }
});
