
document.getElementById("myForm").addEventListener("submit", function(evt){

  // Prevent form from submitting
  evt.preventDefault();

  // Retrieve the input field value
  let inputValue = document.forms[0].inputField.value;

  // Regular expression pattern for alphanumeric input
  let validCheck = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  // Valid input: display confirmation and submit the form
  // Invalid input: display error message

  if(validCheck.test(inputValue)){{
    window.alert("Your input is valid and has been submitted!");
    document.getElementById("myForm").submit();
     }
   }
   else{
    document.forms[0].inputField.setCustomValidity("Please enter an alphanumeric value.");
    document.forms[0].inputField.reportValidity();

    document.forms[0].inputField.addEventListener("input", function() {
      document.forms[0].inputField.setCustomValidity("");
      document.forms[0].inputField.reportValidity();
    }, { once: true });

    //For question on why or how I knew how to implement an event listener once, as I do not believe we learned it in class,
    //I did outside research.
    // https://stackoverflow.com/questions/3393686/only-fire-an-event-once

    }

})