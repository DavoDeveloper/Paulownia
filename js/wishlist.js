let liked_items = document.querySelector(".liked_items");
let a = document.querySelector(".a");
let remove_all = document.querySelector(".remove_all");
let remove_item = document.getElementsByClassName("remove");
let remove_line = document.querySelector(".remove_line");
let count = document.querySelector(".count");
let message = document.querySelector(".message");

//////////////////////////////////// get elements from local storage  ///////////////////////////////////////////////////////

let get_obj = localStorage.getItem("1");
let parsed = JSON.parse(get_obj);
for (let i = 0; i < parsed.length; i++) {
  count.innerHTML = parsed.length;
  let div = document.createElement("div");
  div.classList.add("col-md-4");
  div.classList.add("col-sm-6");
  div.classList.add("col-12");
  div.insertAdjacentHTML(
    "afterbegin",
    `<div class='slider_item'> 
        <div>
          <span class="top">TOP</span>
        </div>
      <div class="item_info">
        <div class="item_bg" style='background-image:url(${parsed[i].src})'></div>
        <p>${parsed[i].name}</p>
        <span><b>Размер:</b> ${parsed[i].size}</span>
        <span><b>Возраст:</b> ${parsed[i].age}</span>
        <span class="mb-2"><b>Возраст:</b> x 5 литров</span>
        <div class="product_details">
          <div class="product_price">
            <span></span>
            <span>${parsed[i].price}$</span>
          </div>
        </div>
        <div class="d-flex justify-content-between" style="flex-wrap: wrap;">
          <div class="remove">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span>Remove</span>
          </div>
          <div>
            <div class="to_basket">
              <img src="./img/shop.png" alt="" />
              <span>В корзину</span>
            </div>
          </div>
        </div>
        </div>
    </div>`
  );

  message.style.display = "none";
  remove_line.style.display = "flex";
  // liked_items.appendChild(div);
  a.appendChild(div);

  for (let j = 0; j < remove_item.length; j++) {
    remove_item[j].addEventListener("click", () => {
      if (i == j) {
        div.remove();
        count.innerHTML = remove_item.length;
        parsed.splice(parsed, 1);
        localStorage.setItem("1", JSON.stringify(parsed));
      }
      if (remove_item.length == 0) {
        remove_line.style.display = "none";
        message.style.display = "flex";
      }
    });
  }
}
remove_all.addEventListener("click", () => {
  liked_items.remove();
  localStorage.removeItem(1);
  remove_line.style.display = "none";
  message.style.display = "flex";
});
