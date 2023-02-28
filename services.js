const mostrar = document.querySelector("#btnSearch");
const mensaje = document.querySelector(".item1");

mostrar.addEventListener("click", () => {
  mensaje.classList.toggle("item1");
});