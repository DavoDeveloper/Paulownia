/////////////////////////////////////////////////// contacts modal /////////////////////////////////////////////////////

let modalbtn = document.querySelector(".modalbtn");
let modal_block = document.querySelector(".modal_block");
let contacts_modal = document.querySelector(".contacts_modal");

modalbtn.addEventListener("click", () => {
  contacts_modal.classList.add("contacts_modal_color_anim");
});

document.body.addEventListener("click", (e) => {
  if (e.target.dataset.close == "true") {
    contacts_modal.classList.remove("contacts_modal_color_anim");
  }
});

// ////////////////////////////////////////////// hover menu //////////////////////////////////////////////////////////

let paulbtn = document.querySelector(".paulbtn");
let paulmenu = document.querySelector(".paulownia_menu");
let li = document.querySelector(".hybrids_li");

paulbtn.addEventListener("click", () => {
  paulmenu.classList.toggle("show-menu");
});
document.body.addEventListener("click", (e) => {
  if (e.target !== paulbtn && !e.target.classList.contains("show-menu")) {
    paulmenu.classList.remove("show-menu");
  }
});

// ///////////////////////////////////////////// mobile menu ////////////////////////////////////////////////////////////

let mobile_menu = document.querySelector(".mobile_menu");
let menu_header = document.getElementsByClassName("drop_menu_header");
let menu_content = document.getElementsByClassName("drop_menu_content");
let toggle_menu = document.querySelector(".toggle_menu");
let menu_close = document.querySelector(".mobile_menu_close");

for (let i = 0; i < menu_header.length; i++) {
  for (let j = 0; j < menu_content.length; j++) {
    if (i == j) {
      menu_header[i].addEventListener("click", () => {
        menu_content[j].classList.toggle("open_menu_content");
        menu_header[i].classList.toggle("open_header");
      });
    }
  }
}

toggle_menu.addEventListener("click", () => {
  mobile_menu.classList.add("show_mobile_menu");
});

menu_close.addEventListener("click", () => {
  mobile_menu.classList.remove("show_mobile_menu");
});
