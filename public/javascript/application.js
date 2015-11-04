$(function() {

  var routes = [];
  var routeList = $('#route-list');
  var newRouteForm = $('#new-route-form');

  // populate routes into app
  $.ajax({
    url: '/routes',
    method: 'get',
    dataType: 'json'
  })
  .done(populateRouteList)
  .done(fadeInRoutes);

  function populateRouteList(routes) {
    routes.forEach(prependRoute);
  }

  function prependRoute(route) {
    $('<p>').text(route.name + " " + route.grade + " : " + route.location).prependTo(routeList);
  }
  // post new route and append
  newRouteForm.on('submit', function(event) {
    $.ajax({
      url: newRouteForm.attr('action'),
      method: newRouteForm.attr('method'),
      data: newRouteForm.serialize()
    })
    .done(prependRoute)
    .done(function() {
      newRouteForm[0].reset();
    });
    return false;
  });

  function fadeInRoutes() {
    routeList.fadeIn();
  }

});
