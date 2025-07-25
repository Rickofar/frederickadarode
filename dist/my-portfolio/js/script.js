// Preloader
$(window).on('load', function() {
  $('.loader').fadeOut('slow');
});

// Navbar Sticky
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});

// Smooth Scrolling
$('a.smooth-scroll').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - 70
  }, 900, 'swing', function() {
    window.location.hash = target;
  });
});

// Close mobile menu when clicking on a link
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// Typed.js Animation
var typed = new Typed('.typed-text', {
  strings: ['a Developer', 'a Designer', 'an Animator', 'a Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var aboutTyped = new Typed('.about-typed-text', {
  strings: ['a Developer', 'a Designer', 'an Animator', 'a Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// About Tabs
$('.tab-item').on('click', function() {
  $('.tab-item').removeClass('active');
  $(this).addClass('active');
  
  var target = $(this).attr('data-target');
  $('.tab-content').removeClass('active');
  $(target).addClass('active');
});

// Portfolio Filter
$(window).on('load', function() {
  var $container = $('.portfolio');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.portfolio-filter span').on('click', function() {
    $('.portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});

// Portfolio Magnific Popup
$('.grid-item').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

// Counter Up
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// Current Year
$('#current-year').text(new Date().getFullYear());

// Download Resume
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = './files/Frederick_Adarode-Resume.pdf';
  link.download = 'Frederick_Adarode-Resume.pdf';
  
  // Append to the body, trigger click, then remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Style Switcher
$(document).ready(function() {
  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    setActiveStyle(savedTheme);
  }

  $('.style-switcher-toggler').on('click', function() {
    $('.style-switcher').toggleClass('open');
  });

  // Hide style switcher on scroll
  $(window).scroll(function() {
    if ($('.style-switcher').hasClass('open')) {
      $('.style-switcher').removeClass('open');
    }
  });
});

// Set active style and save to localStorage
function setActiveStyle(color) {
  // Remove all color stylesheets
  $('link[title^="color-"]').remove();
  
  // Create new link element for the selected color
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.title = color;
  link.href = `css/skins/${color}.css`;
  
  // Append to head
  document.head.appendChild(link);
  
  // Save to localStorage
  localStorage.setItem('portfolio-theme', color);
  
  // Update style switcher UI
  $('.colors span').removeClass('active');
  $(`.color-${color.split('-')[1]}`).addClass('active');
}

// Initialize theme colors
$('.colors span').on('click', function() {
  const color = $(this).attr('class').split(' ')[0];
  setActiveStyle(color);
});