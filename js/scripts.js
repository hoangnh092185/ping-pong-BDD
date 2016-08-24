// ****Business logic****
var numberArray = [];

function numberHolder(input){
  for(var i=1; i<=input; i++)
    if (i % 15 === 0){
      numberArray.push("Ping-Pong");
    }else if (i % 5 === 0) {
      numberArray.push("Pong");
    }else if (i% 3 === 0){
      numberArray.push("Ping");
    }else {
      numberArray.push(i);
    }
      console.log(numberArray);
};

      // ****User Interface Logic****
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    $("ul#results").empty();

    var numberInput = $("input").val();
    numberHolder(numberInput);

    for (var i = 0; i < numberArray.length; i++) {
        $("ul#results").append("<li>" + numberArray[i] + "</li>");
    }
    numberArray = [];
  });
});
