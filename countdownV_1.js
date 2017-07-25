//This fucntion gets the user's date and saves it into a variable as a string.
  function getDate() {
    var monthAndDay = document.getElementById("target-month-day").value;
    var year = document.getElementById("target-year").value;
    var targetDate = monthAndDay + " " + year;
    var dateString = targetDate.toString();
    console.log(dateString);
  }

// This funciton takes the user's date input and subtracts the current date value to reach a "days til" value.
  function countDown() {
    var monthAndDay = document.getElementById("target-month-day").value;
    var year = document.getElementById("target-year").value;
    var targetDate = new Date(monthAndDay + " " + year);
    var now = new Date().getTime();
    var then = targetDate.getTime();
    var timeDif = (then - now) / (1000 * 60 * 60 * 24);
    var daysTil = "There are " + parseInt(timeDif) + " Days left.";
    alert(daysTil);
  }
