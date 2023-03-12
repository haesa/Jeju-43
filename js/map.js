let map;

function initMap_1() {
  var memorial = { lat: 33.45088295975917, lng: 126.62070161291257 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: memorial,
    zoom: 15,
  });

  new google.maps.Marker({
    position: memorial,
    map: map,
    label: "제주 4·3 평화기념관"
  });
}

function initMap_2() {
  var memorial = { lat: 33.45132966231066, lng: 126.61886629571772 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: memorial,
    zoom: 15,
  });

  new google.maps.Marker({
    position: memorial,
    map: map,
    label: "제주 4·3 평화공원"
  });
}
