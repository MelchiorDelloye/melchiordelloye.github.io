function hello() {
  //var score = 0;
  var happy = prompt("Would you like to start the game?").toLowerCase();
  if (happy === "yes") {
    alert("lets play");
    var Question1 = prompt("Who won the Australian Open 2016?").toLowerCase();
    if (Question1 === "novak djokovic") {
      //var score = score + 1;
      alert("correct");
    } else {
      //var score = score - 100000;
      //alert("your score is " + score);
      alert("GO AWAY");
    }
    var Question2 = prompt("how old am i?").toLowerCase();
    if (Question2 === "12") {
      alert("correct");
    } else {
      alert("GO AWAY");
    }

    var Question3 = prompt("who is the player who has won the most grand slams in the tennis era?").toLowerCase();
    if (Question3 === "roger federer") {
      alert("correct");
    } else {
      alert("YOU ARE TERRIBLE!!");
    }

    var Question4 = prompt("where does andy murray come from").toLowerCase();
    if (Question4 === "great britain") {
      alert("correct");
    } else {
      alert("YOU ARE NOT GOOD ENOUGH!!");
    }

  } // happy if ends here
  else {
    alert("GO AWAY");
  } //this is for my start button
} //this is where my function ends