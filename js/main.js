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
    var target = $(this).attr('href').split('#')[1];
    showSection(target);

    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight');
      $('.panel-cover').removeClass('panel-cover--collapsed');
      $('.panel-cover').css('max-width', '100%');
      $('.panel-cover').animate({'width': '100%'}, 400, 'swing', function () {});
      $('.content-wrapper').removeClass('showing');
      history.pushState("", document.title, window.location.pathname + window.location.search);
      e.preventDefault();
      return;
    }
    $('.panel-cover').addClass('panel-cover--collapsed');
    var currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, 'swing', function () {});
    }
    $('.content-wrapper').addClass('showing');
  });

  if (window.location.hash && (window.location.hash === '#projects' || window.location.hash === '#experience')) {
    var target = window.location.hash.split('#')[1];
    showSection(target);
    $('a.panel-button').click();
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

// ---
// layout: null
// sitemap:
//   exclude: 'yes'
// ---
// function toggleMobileMenu() {
//   $('.navigation-wrapper').toggleClass('visible');
//   $('.btn-mobile-menu__icon').toggleClass('hidden');
//   $('.btn-mobile-close__icon').toggleClass('hidden');
// }

// $(document).ready(function () {
//   $('a.panel-button').click(function (e) {
//     if ($('.content-wrapper').hasClass('showing')){
//       $('.content-wrapper').removeClass('animated slideInRight')
//       $('.panel-cover').removeClass('panel-cover--collapsed')
//       $('.panel-cover').css('max-width', '100%')
//       $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
//       $('.content-wrapper').removeClass('showing')
//       history.pushState("", document.title, window.location.pathname + window.location.search);
//       //window.location.hash = '' // leaves #
//       e.preventDefault();
//       return;
//     }
//     $('.panel-cover').addClass('panel-cover--collapsed');
//     currentWidth = $('.panel-cover').width()
//     if (currentWidth < 960) {
//       $('.panel-cover').addClass('panel-cover--collapsed')
//       $('.content-wrapper').addClass('animated slideInRight')
//     } else {
//       $('.panel-cover').css('max-width', currentWidth)
//       $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
//     }
//     $('.content-wrapper').addClass('showing');
//   })
//
//   if (window.location.hash && window.location.hash == '#projects') {
//     $('a.panel-button').click();
//   }
//
//   if (window.location.hash && window.location.hash == '#experience') {
//     $('a.panel-button').click();
//   }
//
//   if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
//     $('.panel-cover').addClass('panel-cover--collapsed')
//   }
//
//   $('.btn-mobile-menu').click(function () {
//     if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
//         $('.navigation-wrapper').addClass('animated bounceInDown');
//     }
//     toggleMobileMenu();
//   })
//
//   $('.navigation-wrapper .projects-button').click(function () {
//     toggleMobileMenu();
//   })
// })
