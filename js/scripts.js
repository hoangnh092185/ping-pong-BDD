// ****Business logic****
var numberArray = [];

function numbersString(input){
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

// ****User interface logic****
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();

    var numberInput = $("input").val().split();
    numbersString(numberInput);

    var numberString = numberArray.toString();
    
    function numberString(){
      for (var i=0;i<=numberArray.length;i++){
        $("ul#results").append("<li>" + numberArray(i) + "</li>");
      }
    }
    $("ul#results").append("<li>" + numberArray + "</li>");
  });
});
