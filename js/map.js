// Creating a foundation of map element

let map = L.map("map").setView([31.905424, -90.045141], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let myIcon = L.icon({
  iconUrl: "./assets/icons/pin.png",
  iconSize: [50, 47],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

let secondMarker = L.marker([31.105424, -96.045141], { icon: myIcon }).addTo(
  map
);
let marker = L.marker([32.52799, -83.883721], { icon: myIcon }).addTo(map);

// Map view click event

const mapViews = document.querySelectorAll(".map-view");
const myMap = document.getElementById("map");

mapViews.forEach((mapView, index) => {
  mapView.addEventListener("click", () => {
    const scrollPos = myMap.getBoundingClientRect().height / 10;
    const mapFromTop = myMap.getBoundingClientRect().top;
    // scroll to map
    window.scrollTo({
      top: window.pageYOffset + mapFromTop - scrollPos,
      left: 100,
      behavior: "smooth",
    });
    // set map view
    setTimeout(() => {
      if (index === 0) {
        map.setView([31.105424, -96.045141], 7);
      } else {
        map.setView([32.52799, -83.883721], 7);
      }
    }, 500);
  });
});
