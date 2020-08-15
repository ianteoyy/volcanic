function checkScroll() {
  const navHeight = $(".navbar").outerHeight();
  if ($(window).scrollTop() > navHeight) {
    $(".navbar").addClass("bg-dark");
    $(".navbar").removeClass("bg-transparent");
  } else {
    $(".navbar").removeClass("bg-dark");
    $(".navbar").addClass("bg-transparent");
  }
}

$("document").ready(function () {
  $(window).on("scroll resize", function () {
    checkScroll();
  });

  $("#feature-wheel .slick-carousel").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 360,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
