$(function() {

  var routes = [];
  var routeList = $('#route-list');


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

});
