function initMap() {
	L.mapquest.key = "R8lApdK7EoqGnK4hQbUbWGrNR16s7iLm";

  var map = L.mapquest.map('map',{
    center:[32.87855993585355, -117.23583508689596],
    layers: L.mapquest.tileLayer('map'),
    zoom:14,
    zoomControl: false
  });

  L.marker([32.87855993585355, -117.23583508689596]).addTo(map);
}
