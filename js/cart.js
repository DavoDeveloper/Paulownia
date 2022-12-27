let liked_items = document.querySelector(".liked_items");
let remove_item = document.getElementsByClassName("del");
let remove_line = document.querySelector(".remove_line");
let message = document.querySelector(".message");
let cart_event = document.querySelector(".cart_event");
let sum_price = document.querySelector(".sum_price");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let get_obj = localStorage.getItem("2");
let parsed = JSON.parse(get_obj);

for (let i = 0; i < parsed.length; i++) {
  let div = document.createElement("div");

  div.classList.add("cart_item");
  div.insertAdjacentHTML(
    "afterbegin",
    `
    <a href="./single-product.html">
        <div class="prod">
            <div class="d-flex" style="padding: 15px 0px">
            <div class="cart_img" style='background-image:url(${parsed[i].src})'></div>
            <div class="d-flex flex-column">
                <span style="font-weight: 600; font-size: 14px; color: #595656">${parsed[i].name}</span>
                <span style="font-size: 13px; color: #575656">Артикул: ${parsed[i].article}</span>
                <div>
                    <span style="color: #569b00">Размер:</span>
                    <span style="font-weight: 400; font-size: 13px; text-transform: lowercase; color: #575756">${parsed[i].size}</span>
                </div>
                <div>
                <span style="color: #569b00">Возраст:</span>
                <span style="font-weight: 400; font-size: 13px; text-transform: lowercase; color: #575756">${parsed[i].age}</span>
                </div>
            </div>
            </div>
        </div>
    </a>
    <span class="d-lg-block d-none" style="font-weight: 400; font-size: 16px; color: #595656">${parsed[i].price}€</span>
    <span class="d-lg-block d-none">${parsed[i].qty}</span>
    <div class='d-flex' style="font-weight: 500; font-size: 16px; color: #595656">
    <div class="d-lg-block d-none">
        <span class="final_price">${parsed[i].final_price}</span>
        <span>€</span>
    </div>
    </div>  
    <div class="del d-lg-block d-none">
      <span>Delete</span>
    </div>
  </div>`
  );

  message.style.display = "none";
  remove_line.style.display = "flex";
  cart_event.style.display = "block";

  liked_items.appendChild(div);

  let final_price = document.getElementsByClassName("final_price");
  let q = 0;
  for (let i = 0; i < final_price.length; i++) {
    q += +final_price[i].innerHTML;
  }
  sum_price.innerHTML = q;

  for (let j = 0; j < remove_item.length; j++) {
    remove_item[j].addEventListener("click", () => {
      if (i == j) {
        div.remove();
        parsed.splice(parsed, 1);
        localStorage.setItem("2", JSON.stringify(parsed));
      }
      if (remove_item.length == 0) {
        remove_line.style.display = "none";
        message.style.display = "flex";
        cart_event.style.display = "none";
      }
      q = 0;
      for (let i = 0; i < final_price.length; i++) {
        q += +final_price[i].innerHTML;
      }
      sum_price.innerHTML = q;
    });
  }
}
