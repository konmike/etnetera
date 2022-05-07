$(document).ready(function () {
  $(".nav__icon").click(function () {
    $(".nav__list").toggleClass("open");
    $(".header").toggleClass("open");
    $(this).toggleClass("close");
  });

  $("#next").click(function () {
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

  $("#prev").click(function () {
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

  $("#newsletter-open").click(function () {
    $(".newsletter").fadeToggle().css("display", "flex");
  });
  $("#newsletter-close").click(function () {
    $(".newsletter").fadeOut();
  });
});
