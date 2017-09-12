$(function() {
  'use strict';

  var featureCard = $('.feature-card');

  featureCard.on('click', function(e) {
    var element = $(this);
    if (element.hasClass('hovered')) {
      $(this).removeClass('hovered');
    } else {
      $(this).addClass('hovered');
    }
  });

  featureCard.on('mouseover', function(e) {
    $(this).addClass('hovered');
  });

  featureCard.on('touchstart', function(e) {
    $(this).addClass('hovered');
  });

  featureCard.on('mouseleave', function() {
    $(this).removeClass('hovered');
  });

  featureCard.on('touchend', function(e) {
    $(this).removeClass('hovered');
  });
});
