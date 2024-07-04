---
layout: null
sitemap:
  exclude: 'yes'
---
function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}

$(document).ready(function () {
  function showSection(section) {
    if (section === 'projects') {
      $('#projects-section').show();
      $('#experience-section').hide();
    } else if (section === 'experience') {
      $('#projects-section').hide();
      $('#experience-section').show();
    }
  }

  $('a.panel-button').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href').split('#')[1];
    var currentSection = $('.content-wrapper').data('current-section');

    if ($('.content-wrapper').hasClass('showing')) {
      if (currentSection === target) {
        $('.content-wrapper').removeClass('animated slideInRight showing');
        $('.panel-cover').removeClass('panel-cover--collapsed');
        $('.panel-cover').css('max-width', '100%');
        $('.panel-cover').animate({'width': '100%'}, 400, 'swing', function () {});
      } else {
        showSection(target);
        $('.content-wrapper').data('current-section', target);
      }
    } else {
      // Si la vista por defecto está abierta, colapsamos el panel y mostramos la sección
      $('.panel-cover').addClass('panel-cover--collapsed');
      var currentWidth = $('.panel-cover').width();
      if (currentWidth < 960) {
        $('.content-wrapper').addClass('animated slideInRight showing');
      } else {
        $('.panel-cover').css('max-width', currentWidth);
        $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, 'swing', function () {
          $('.content-wrapper').addClass('showing');
        });
      }
      showSection(target);
      $('.content-wrapper').data('current-section', target);
    }
  });

  if (window.location.hash && (window.location.hash === '#projects' || window.location.hash === '#experience')) {
    var target = window.location.hash.split('#')[1];
    showSection(target);
    $('.content-wrapper').addClass('showing');
    $('.panel-cover').addClass('panel-cover--collapsed');
    var currentWidth = $('.panel-cover').width();
    if (currentWidth >= 960) {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, 'swing', function () {});
    }
    $('.content-wrapper').data('current-section', target);
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
        $('.navigation-wrapper').addClass('animated bounceInDown');
    }
    toggleMobileMenu();
  });

  $('.navigation-wrapper .projects-button').click(function () {
    toggleMobileMenu();
  });

  $('.navigation-wrapper .experience-button').click(function () {
    toggleMobileMenu();
  });
});
