import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwneVRGERutv41aPyjORgebUWDjLqwzfo",
  authDomain: "webiot-39096.firebaseapp.com",
  databaseURL: "https://webiot-39096-default-rtdb.firebaseio.com",
  projectId: "webiot-39096",
  storageBucket: "webiot-39096.appspot.com",
  messagingSenderId: "17079901948",
  appId: "1:17079901948:web:17e4ea0198fba24a088179",
  measurementId: "G-F23VK0PNC9"
};
	
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
