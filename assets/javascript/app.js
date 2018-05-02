
var employeeName;
var role;
var startDate;
var time;
var rate;
var total;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF_874NV-FkZ6_PZxp9fVxbC2kLVacKOg",
    authDomain: "employeetracker-1c2da.firebaseapp.com",
    databaseURL: "https://employeetracker-1c2da.firebaseio.com",
    projectId: "employeetracker-1c2da",
    storageBucket: "",
    messagingSenderId: "557717754944"
  };
  firebase.initializeApp(config);

var database = firebase.database();