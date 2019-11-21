var firebaseConfig = {
  apiKey: "AIzaSyApyArOCHzH70DGg6PR-U1Pq5wdKsebYfI",
  authDomain: "locate-df1d9.firebaseapp.com",
  databaseURL: "https://locate-df1d9.firebaseio.com",
  projectId: "locate-df1d9",
  storageBucket: "locate-df1d9.appspot.com",
  messagingSenderId: "712094582585",
  appId: "1:712094582585:web:a97c833ea04fee7cbd4ae8",
  measurementId: "G-QHKB7PT9E6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("geolocation not supported");
  }
}

function showPosition(position) {
  const { coords } = position;
  const { latitude, longitude } = coords;
  const db = firebase.database();
  db.ref("locations").push({
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
    latitude,
    longitude
  });
}

getLocation();
