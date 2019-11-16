  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDVIo25bOPDJjnHpekanhVxdt9lZFSOxp0",
    authDomain: "loren-kolstad.firebaseapp.com",
    databaseURL: "https://loren-kolstad.firebaseio.com",
    projectId: "loren-kolstad",
    storageBucket: "loren-kolstad.appspot.com",
    messagingSenderId: "274851895665",
    appId: "1:274851895665:web:5e537d4502b4148dfbbed0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var firstName = "";
  var lastName = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function(event){
    event.preventDefault();

    firstName = $("#firstName").val().trim();
    lastName = $("#lastName").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();

    database.ref().push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
  });

  database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().firstName);
    console.log(childSnapshot.val().lastName);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().message);

  });

    // var cardColumn = $("<div>").attr("class", "col s12")
    // var card = $("<div>").attr("class", "card")
    // var memberInfo = $("<div>").attr("class", "member-info")
    // var name = $("<h4>").attr("class", "member-name")
    // var emails = $("<p>").attr("id", "member-email")
    // var messages = $("<p>").attr("id", "member-message")

    //   name.text(childSnapshot.val().firstName + " " + childSnapshot.val().lastName)
    //   emails.text(childSnapshot.val().email)
    //   messages.text(childSnapshot.val().message)

    // memberInfo.append(name)
    // memberInfo.append(emails)
    // memberInfo.append(messages)
    // card.append(memberInfo)
    // cardColumn.append(card)
    // $(".show-member-info").prepend(cardColumn)
    // $("#member-header").hide()
    // $("#leave-message").hide()

//   }), function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//   }