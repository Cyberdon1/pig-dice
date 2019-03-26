
var count = 0

var number = parseInt(Math.floor(Math.random() * 6) + 1);

var addCount = function(number) {
   if (number = 1) {
     result = ("This is your total:"+ (count));
   } else {
     result = count ++;
   }

};

$(document).ready(function() {
  $("form#dice").submit(function(event) {


    var player = parseInt($("input:radio[name=player]:checked").val());

    if (number <= 1) {
      result = ("Your turn is over")
    } else {
      addCount(number);
    }


  $("#answer").append(result);

    $("#output").show();

    //consolelog(count)

    //onSubmit="window.location.reload();"

    event.preventDefault();
  });
});
