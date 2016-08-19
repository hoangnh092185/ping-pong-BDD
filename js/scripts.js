// ****Business logic****






// ****User interface logic****
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var numberInput = $("input").val();

    $("#results").append(numberArray);
  })
})
