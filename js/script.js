$(document).ready(function () {
  let slider = $("#lightSlider").lightSlider({
    item: 4,
    loop: true,
    controls: false,
    pager: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          item: 3,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 950,
        settings: {
          item: 2,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 650,
        settings: {
          item: 1,
        },
      },
    ],
  });
  $(".left").click(function () {
    slider.goToPrevSlide();
  });
  $(".right").click(function () {
    slider.goToNextSlide();
  });
});

$(document).ready(function () {
  let slider = $("#lightSlider1").lightSlider({
    item: 4,
    loop: true,
    controls: false,
    pager: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          item: 3,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 950,
        settings: {
          item: 2,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 650,
        settings: {
          item: 1,
        },
      },
    ],
  });

  $(".left1").click(function () {
    slider.goToPrevSlide();
  });
  $(".right1").click(function () {
    slider.goToNextSlide();
  });
});

$(document).ready(function () {
  $("#imageGallery").lightSlider({
    item: 1,
    loop: true,
    thumbItem: 3,
    controls: false,
    mode: "fade",
    auto: true,
    pause: 3000,
    enableDrag: false,
    enableTouch: false,
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#imageGallery .lslide",
      });
    },
  });
});
