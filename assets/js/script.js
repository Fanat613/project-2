$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
