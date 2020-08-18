function setNavbarTransparency() {
  const navHeight = $(".navbar").outerHeight();
  if ($(window).scrollTop() > navHeight) {
    $(".navbar").addClass("bg-dark");
    $(".navbar").removeClass("bg-transparent");
  } else {
    $(".navbar").removeClass("bg-dark");
    $(".navbar").addClass("bg-transparent");
  }
}

const jobsCarouselOptions = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
      },
    },
    {
      breakpoint: 1200,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false
      },
    },
    {
      breakpoint: 992,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      },
    },
    {
      breakpoint: 576,
      settings: "unslick",
    },
  ],
};

$("document").ready(function () {
  // in case page is scrolled halfway down on load
  setNavbarTransparency();

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
        },
      },
      {
        breakpoint: 360,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // converts the latest jobs postings into a carousel
  $(".jobs-carousel").slick(jobsCarouselOptions);

  // sets the insight backgrounds
  $(".insight-bg").each(function(key, elem) {
    $(elem).css("background-image", `url(../assets/insights/insight-0${key+1}.jpg)`);
  })
});

$(window).on("scroll resize orientationchange", function () {
  setNavbarTransparency();
});
