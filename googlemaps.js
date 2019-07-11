function initMap() {
// The location of the Bay Area
var bay_area = {lat: 37.8272, lng: 122.2913};
// centered at Bay bay_area
var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: bay_area});
// marker at bay_area
var marker = new google.maps.Marker({position: bay_area, map: map});
}
