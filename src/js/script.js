$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".menu").toggleClass("open");
    $(".header").toggleClass("open");
    $(this).toggleClass("close");
  });

  $(".carousel__feed").on("swipeleft", function () {
    console.log("test");
  });

  $("#next").on("click", function () {
    let active = $(".carousel__item.active");
    let next = $(".carousel__item.active").next();
    let first = $(".carousel__item").first();

    active.removeClass("active");
    if (next.length) {
      next.addClass("active").hide().fadeIn();
    } else {
      first.addClass("active").hide().fadeIn();
    }
  });

  $("#prev").on("click", function () {
    let active = $(".carousel__item.active");
    let prev = $(".carousel__item.active").prev();
    let last = $(".carousel__item").last();

    active.removeClass("active");
    if (prev.length) {
      prev.addClass("active").hide().fadeIn();
    } else {
      last.addClass("active").hide().fadeIn();
    }
  });

  $("#newsletter-open").on("click", function () {
    $(".newsletter").fadeToggle().css("display", "flex");
  });
  $("#newsletter-close").on("click", function () {
    $(".newsletter").fadeOut();
  });
});
