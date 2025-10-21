// script.js
$(document).ready(function(){

    $(".menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("open");
    $("body").toggleClass("menu-open"); // prevent background scroll (optional)
  });
  

  $(".select-trigger").click(function(e){
    e.stopPropagation();
    $(".options").slideToggle(150);
    $(this).toggleClass("active");
  });

  $(".options li").click(function(){
    var selectedText = $(this).text();
    var selectedValue = $(this).data("lang");

    $(".select-trigger").text(selectedText);
    $("#language").val(selectedValue);

    $(".options").slideUp(150);
  });

  // Close dropdown if clicked outside
  $(document).click(function(){
    $(".options").slideUp(150);
    $(".select-trigger").removeClass("active");
  });

    $('.tab-links a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');

    // Remove active classes
    $('.tab-links li, .tab-content .tab').removeClass('active');

    // Add active class to clicked tab
    $(this).parent().addClass('active');
    $(target).addClass('active');
  });
  
    // FAQ accordion functionality
    $('.faq__question').on('click keypress', function(e) {
        if (e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
            const $this = $(this);
            const isExpanded = $this.attr('aria-expanded') === 'true';
            $this.attr('aria-expanded', !isExpanded);
            $this.next('.faq__answer').slideToggle(300);
        }
    });

  // Initialize slick slider
  $(".testimonial").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    // dots: true,
    focusOnChange: true,
  });

  $('.testimonial').find('.slick-prev, .slick-next').wrapAll('<div class="slick-arrows-wrapper"></div>');

});