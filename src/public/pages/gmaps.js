/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Google Maps
 */

!(function ($) {
  const GoogleMap = function () {};

  // creates map with markers
  GoogleMap.prototype.createMarkers = function ($container) {
    const map = new GMaps({
      div: $container,
      lat: -12.043333,
      lng: -77.028333,
    });

    // sample markers, but you can pass actual marker data as function parameter
    map.addMarker({
      lat: -12.043333,
      lng: -77.03,
      title: 'Lima',
      details: {
        database_id: 42,
        author: 'HPNeo',
      },
      click(e) {
        if (console.log) console.log(e);
        alert('You clicked in this marker');
      },
    });
    map.addMarker({
      lat: -12.042,
      lng: -77.028333,
      title: 'Marker with InfoWindow',
      infoWindow: {
        content: '<p>HTML Content</p>',
      },
    });

    return map;
  },

  // creates map with overlay
  GoogleMap.prototype.createWithOverlay = function ($container) {
    const map = new GMaps({
      div: $container,
      lat: -12.043333,
      lng: -77.028333,
    });
    map.drawOverlay({
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng(),
      content: '<div class="gmaps-overlay">Our Office!<div class="gmaps-overlay_arrow above"></div></div>',
      verticalAlign: 'top',
      horizontalAlign: 'center',
    });

    return map;
  },

  // creates map with street view
  GoogleMap.prototype.createWithStreetview = function ($container, $lat, $lng) {
    return GMaps.createPanorama({
      el: $container,
      lat: $lat,
      lng: $lng,
    });
  },
  // Type
  GoogleMap.prototype.createMapByType = function ($container, $lat, $lng) {
    const map = new GMaps({
      div: $container,
      lat: $lat,
      lng: $lng,
      mapTypeControlOptions: {
        mapTypeIds: ['hybrid', 'roadmap', 'satellite', 'terrain', 'osm', 'cloudmade'],
      },
    });
    map.addMapType('osm', {
      getTileUrl(coord, zoom) {
        return `http://tile.openstreetmap.org/${zoom}/${coord.x}/${coord.y}.png`;
      },
      tileSize: new google.maps.Size(256, 256),
      name: 'OpenStreetMap',
      maxZoom: 18,
    });
    map.addMapType('cloudmade', {
      getTileUrl(coord, zoom) {
        return `http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/${zoom}/${coord.x}/${coord.y}.png`;
      },
      tileSize: new google.maps.Size(256, 256),
      name: 'CloudMade',
      maxZoom: 18,
    });
    map.setMapTypeId('osm');
    return map;
  },
  GoogleMap.prototype.createWithMenu = function ($container, $lat, $lng) {
    const map = new GMaps({
      div: $container,
      lat: $lat,
      lng: $lng,
    });
    map.setContextMenu({
      control: 'map',
      options: [{
        title: 'Add marker',
        name: 'add_marker',
        action(e) {
          this.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            title: 'New marker',
          });
          this.hideContextMenu();
        },
      }, {
        title: 'Center here',
        name: 'center_here',
        action(e) {
          this.setCenter(e.latLng.lat(), e.latLng.lng());
        },
      }],
    });
  },
  // init
  GoogleMap.prototype.init = function () {
    const $this = this;
    $(document).on('ready', () => {
      // with sample markers
      $this.createMarkers('#gmaps-markers');

      // overlay
      $this.createWithOverlay('#gmaps-overlay');

      // street view
      $this.createWithStreetview('#panorama', 42.3455, -71.0983);

      // types
      $this.createMapByType('#gmaps-types', -12.043333, -77.028333);
    });
  },
  // init
  $.GoogleMap = new GoogleMap(), $.GoogleMap.Constructor = GoogleMap;
}(window.jQuery)),

// initializing
(function ($) {
  $.GoogleMap.init();
}(window.jQuery));
