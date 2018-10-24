$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var inputyear = parseInt($("#year").val());

    // if (inputyear === "1993" ) {
    //   //return false;
    //   //console.log(inputyear);
    //   $("#notALeapYear").show();
    //   $("#isNotALeapYear").text(inputyear);
    // }

    if (inputyear % 4 === 0 || inputyear % 400 === 0) {
      $("#leapYear").show();
      $("#isALeapYear").text(inputyear);
    } else if (inputyear % 4 != 0 || inputyear % 100 === 0){
      $("#notALeapYear").show();
      $("#isNotALeapYear").text(inputyear);
    }

    //$("#result").show();
  //$(".year").text(inputyear);
  });
});
