$(function () {
  "use strict";

  // Hero image slider
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5500,
    autoplayHoverPause: true,
    smartSpeed: 900,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: "fadeOut",
    responsive: { 0: { nav: false }, 768: { nav: true } }
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 6500,
    autoplayHoverPause: true,
    smartSpeed: 700,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 }
    }
  });

  // Close the mobile navigation after selecting an anchor
  $(".navbar-nav .nav-link, .navbar-nav .btn").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Portfolio filters
  $(".portfolio-filter").on("click", function () {
    var filter = $(this).data("filter");
    $(".portfolio-filter").removeClass("active");
    $(this).addClass("active");
    $(".portfolio-item").each(function () {
      var category = $(this).data("category");
      $(this).toggleClass("is-hidden", filter !== "all" && category !== filter);
    });
  });

  // Contact form: prepare an email in the visitor's mail app.
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    var name = $.trim($("#name").val());
    var phone = $.trim($("#phone").val());
    var email = $.trim($("#email").val());
    var projectType = $("#projectType").val() || "Not specified";
    var message = $.trim($("#message").val());
    var feedback = $("#formFeedback");

    if (!name || !phone || !message) {
      feedback.text("Please fill in your name, phone number and project details.");
      return;
    }

    var subject = encodeURIComponent("Interior Project Enquiry — " + name);
    var body = encodeURIComponent(
      "Hello Mritunjay Sharma Interior Work,\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Email: " + (email || "Not provided") + "\n" +
      "Project type: " + projectType + "\n\n" +
      "Project details:\n" + message + "\n\n" +
      "Sent from the website contact form."
    );
    feedback.text("Opening your email app with your enquiry details…");
    window.location.href = "mailto:mritunjaysharma9088@gmail.com?subject=" + subject + "&body=" + body;
  });

  // Current year
  $("#currentYear").text(new Date().getFullYear());

  // Back to top visibility
  var backToTop = $(".back-to-top");
  $(window).on("scroll", function () {
    backToTop.toggleClass("visible", $(this).scrollTop() > 450);
  });

  // Update active nav item while scrolling
  var sections = $("section[id], header[id]");
  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop() + 140;
    sections.each(function () {
      if (this.id && scrollPos >= $(this).offset().top && scrollPos < $(this).offset().top + $(this).outerHeight()) {
        $(".navbar-nav .nav-link").removeClass("active");
        $('.navbar-nav .nav-link[href="#' + this.id + '"]').addClass("active");
      }
    });
  });
});
