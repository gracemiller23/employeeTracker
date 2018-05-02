


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

var employeeName = "";
var role = "";
var startDate = "";
var time = moment(startDate, "MM/DD/YY", true).isValid();
var rate = "";
var total = "";

$("#submit").on("click", function(event){



    event.preventDefault();

    employeeName = $("#ename").val().trim();
    role = $("#role").val().trim();
    startDate = $("#sdate").val().trim();
    // time = $("#").val().trim();
    rate = $("#mrate").val().trim();

    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        time: time,
        rate: rate,
        dateAdded:
        firebase.database.ServerValue.TIMESTAMP
    });

    $(".form-control").val("");

});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snap){

    // console.log(snap.val().employeeName);
    // console.log(snap.val().role);
    // console.log(snap.val().startDate);
    // console.log(snap.val().rate);

    var nameSnap = snap.val().employeeName;
    var roleSnap = snap.val().role;
    var dateSnap = snap.val().startDate;
    var rateSnap = snap.val().rate;

    $("#blorp").prepend("<tr><td>" +nameSnap+ "</td><td>" +roleSnap +"</td><td>" +dateSnap+ "</td><td>"+ rateSnap+ "</td><td>" );



});

//moment("20111031", "YYYYMMDD").fromNow();


