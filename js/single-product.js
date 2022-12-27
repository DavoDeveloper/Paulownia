//////////////////////////////////////////////////////////// Gallery slider ////////////////////////////////////////////////////

$(document).ready(function () {
  let slider = $("#imageGallery").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 5,
    thumbMargin: 4,
    slideMargin: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          thumbItem: 3,
        },
      },
    ],
  });
  $(".prev").click(function () {
    slider.goToPrevSlide();
  });
  $(".next").click(function () {
    slider.goToNextSlide();
  });
});

// ///////////////////////////////////////////////////////////////// tab //////////////////////////////////////////////////////////////////////////

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// //////////////////////////////////////////////////////////////// price validation /////////////////////////////////////////////////////////////////

let result = document.querySelector(".result");

window.onload = function () {
  result.value = "";
  result.value = "1";
};

$(function () {
  $("input[name='numonly']").on("input", function (e) {
    $(this).val(
      $(this)
        .val()
        .replace(/[^1-9]/g, "")
    );
  });
});

function onlynum() {
  var fm = document.getElementById("form2");
  var ip = document.getElementById("num");
  var tag = document.getElementById("value");
  var res = ip.value;
  if (res != "") {
    if (isNaN(res)) {
      ip.value = "";
      fm.reset();
      return false;
    } else {
      return true;
    }
  }
}

///////////////////////////////////////////////////////////// quantity controls ///////////////////////////////////////////////////////////////

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let price = document.querySelector(".final_price");
let quantity = document.querySelector(".final_quantity");
let res = document.querySelector(".res");
plus.addEventListener("click", () => {
  result.value++;
  quantity.innerHTML = result.value;
  res.innerHTML = Number(quantity.innerHTML) * Number(price.innerHTML);
});
minus.addEventListener("click", () => {
  result.value--;
  if (result.value == 0) {
    result.value = 1;
  }
  quantity.innerHTML = result.value;
  res.innerHTML = Number(quantity.innerHTML) * Number(price.innerHTML);
});

// // //////////////////////////////////////////////////////// add items to localstroage /////////////////////////////////////////

let product_name = document.querySelector(".product_name");
let product_age = document.querySelector(".product_age");
let product_size = document.querySelector(".product_size");
let product_img = document.querySelector(".slider_thumb");
let product_article = document.querySelector(".article");

let item_info = [];
let cart_info = [];

let heart = document.querySelector(".item-heart");
let cart = document.querySelector(".cart");

function addItemToLocalStorage(arr, item_number) {
  let obj = {
    price: price.innerHTML,
    name: product_name.innerHTML,
    age: product_age.innerHTML,
    article: product_article.innerHTML,
    size: product_size.innerHTML,
    src: product_img.dataset.thumb,
    qty: quantity.innerHTML,
    final_price: res.innerHTML,
  };

  arr.push(obj);
  let stringify_obj = JSON.stringify(arr);
  localStorage.setItem(item_number, stringify_obj);
}

// // // /////////////////////////////////////////////////////// add wishlist ///////////////////////////////////////////////////////

let message = document.querySelector(".add_message");
function a() {
  setTimeout(message.classList.remove("show_message"), 2000);
}

heart.addEventListener("click", () => {
  addItemToLocalStorage(item_info, "1");
  message.classList.add("show_message");
  setTimeout(a, 3000);
});

// // ///////////////////////////////////////////////////////add shopping cart //////////////////////////////////////////////////

cart.addEventListener("click", () => {
  addItemToLocalStorage(cart_info, "2");
  message.classList.add("show_message");
  setTimeout(a, 3000);
});
