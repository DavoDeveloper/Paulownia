let industrial = document.querySelector(".industrial");
let agro = document.querySelector(".agro");
let ind_controls = document.querySelector(".ind_controls");
let agro_controls = document.querySelector(".agro_controls");
agro.addEventListener("click", () => {
  agro.classList.remove("passive_btn");
  industrial.classList.add("passive_btn");
  ind_controls.classList.add("hide");
  agro_controls.classList.remove("hide");
});
industrial.addEventListener("click", () => {
  industrial.classList.remove("passive_btn");
  agro.classList.add("passive_btn");
  ind_controls.classList.remove("hide");
  agro_controls.classList.add("hide");
});
