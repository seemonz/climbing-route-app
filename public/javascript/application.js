$(function() {

  var routes = [];
  var routeList = $('#route-list');
  var newRouteForm = $('#new-route-form');

  // populate routes into app
  $.ajax({
    url: '/routes',
    method: 'get',
    dataType: 'json'
  }).done(populateRouteList);

  function populateRouteList(routes) {
    routes.forEach(appendRoute);
  }

  function appendRoute(route) {
    routeList.text(route.name).appendTo(routeList);
  }

  newRouteForm.on('submit', function(event) {
    $.ajax({
      url: newRouteForm.attr('action'),
      method: newRouteForm.attr('method'),
      data: newRouteForm.serialize()
    }).done(appendRoute)
    return false;
  });

});
