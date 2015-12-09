
// MAP PLUGIN
jQuery(function($){
  $("#map").width("100%").height("100%").gmap3({
    // OPTION MAP
    map: {
      options: {
        center: [50.7045971, 5.622944999999959],
        zoom: 14,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
      }
    },
    // OPTION MARKER
    marker:{
      address: "1000 Assurances - Rue de Herstal, 28 - 4680 HERMEE",
      data: "1000 Assurances - Rue de Herstal, 28 - 4680 HERMEE",
      options: {icon: new google.maps.MarkerImage("img/marker.png")},
      events: {
        mouseover: function(marker, event, context){
          var map = $(this).gmap3("get"),
          infowindow = $(this).gmap3({get:{name:"infowindow"}});
          if (infowindow){
            infowindow.open(map, marker);
            infowindow.setContent(context.data);
          } else {
            $(this).gmap3({
              infowindow: {
                anchor: marker,
                options: {content: context.data}
              }
            });
          }
        }
      }
    }
  })
});
