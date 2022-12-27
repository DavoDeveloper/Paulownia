/// filter controls

let closing = document.getElementsByClassName("closing");
let close = document.getElementsByClassName("close-content");
for (let i = 0; i < closing.length; i++) {
  for (let j = 0; j < close.length; j++) {
    close[j].addEventListener("click", () => {
      if (j == i && !j == 0) {
        closing[i].classList.toggle("hide");
        close[j].classList.toggle("active");
        close[j].classList.toggle("rotate");
      } else if (j == 0) {
        closing[0].classList.add("hidden");
      }
    });
  }
}

// mobile filter

let filter_btn = document.querySelector(".filter");
let filter_menu = document.querySelector(".filters");
filter_btn.addEventListener("click", () => {
  filter_menu.classList.toggle("a");
});

//media

const mediaQuery = window.matchMedia("(min-width: 992px)");
function handleTabletChange(e) {
  if (e.matches) {
    filter_menu.classList.remove("a");
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

// vertical,linear menu controls

let vertical = document.querySelector(".vertical");
let linear = document.querySelector(".linear");
let vertical_items = document.getElementsByClassName("vertical_items");
let linear_items = document.querySelector(".linear_items");
linear.addEventListener("click", () => {
  linear.classList.add("active");
  vertical.classList.remove("active");
  for (let i = 0; i < vertical_items.length; i++) {
    linear_items.classList.add("show");
    vertical_items[i].classList.add("hidden");
  }
});
vertical.addEventListener("click", () => {
  vertical.classList.add("active");
  linear.classList.remove("active");
  for (let i = 0; i < vertical_items.length; i++) {
    linear_items.classList.remove("show");
    vertical_items[i].classList.remove("hidden");
  }
});
