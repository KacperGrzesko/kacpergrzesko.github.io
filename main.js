const burger = document.querySelector(".menu-toggler");
burger.addEventListener("click", function() {
  document.querySelector(".top-nav").classList.toggle("open");
  document.querySelector(".first").classList.toggle("open");
  document.querySelector(".second").classList.toggle("open");
  document.querySelector(".third").classList.toggle("open");
});

/*$('nav a[href*="#"]').on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 100
    },
    2000
  );
});*/
