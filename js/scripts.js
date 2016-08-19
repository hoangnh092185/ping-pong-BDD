// ****Business logic****
function numberString(input){
  for(var i= 0; i<=input;i++)
    if (input === "3"){
      alert("true");
    }alert(false);

};
debugger;




// ****User interface logic****
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var numberInput = $("input").val();
    numberString(numberInput);

    $("#results").append(numberArray);
  })
})
