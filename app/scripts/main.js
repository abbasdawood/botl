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

  var contentfulClient = contentful.createClient({
    accessToken: 'a095c6914701f1266b26a6bcf1ed9a76ece4da8e12bb56e42190d91c59a329ba',
    space: '74mfkbseo8bs'
  });

  var CLIENT_CONTENT_TYPE = 'client';
  var LOCATIONS_CONTENT_TYPE = 'location';

  function renderImage(image) {
    if (image && image.fields.file) {
      return '<div class="logo-holder"><img class="client-logo" src="' + image.fields.file.url + '" alt="' + image.fields.title + '"/></div>';
    } else {
      return '';
    }
  }

  function renderSingleClient(client) {
    var fields = client.fields;
    return renderImage(fields.logo);
  }

  function renderClients(clients) {
    return clients.map(renderSingleClient).join('');
  }

  function renderSingleLocation(location) {
    return '<a href="https://www.google.co.in/maps/?q=' + location.fields.location.lat + ',' + location.fields.location.lon + '" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">' +
      '<div class="d-flex w-100 justify-content-between">' +
      '<h6 class="mb-1 text-capitalize">' + location.fields.storeName + '</h6>' +
      '</div>' +
      '<p class="mb-1">' + location.fields.address + '</p>' +
      '</a>';
  }

  function renderLocations(locations) {
    return locations.map(renderSingleLocation).join('');
  }

  contentfulClient.getEntries({
      content_type: CLIENT_CONTENT_TYPE
    })
    .then(function(entries) {
      $('#client-logos')[0].innerHTML = renderClients(entries.items);
    });


  $('#locatorModal').on('show.bs.modal', function(e) {
    //Load the stores now
    contentfulClient.getEntries({
        content_type: LOCATIONS_CONTENT_TYPE
      })
      .then(function(entries) {
        $('#client-list')[0].innerHTML = renderLocations(entries.items);
      });
  });

  $('.product-card').each(function(index, element) {
    $(this).on('click', function() {
      event.preventDefault();
      event.stopPropagation();
      window.open($(this).data().page, '_blank');
    });
  });

});
