/**
 * As a engineer, I would like to have my form validated so the information is safe and correct.
*  
*  All the fields should be required!!

*  If a field is left empty on form submission, 
*  the form will display a red box indicating to the user that there has been an error.
*  
*  If the form is valid, the form should submit(vanish or disappear), and the user should see a confirmation of information they filled out. (Developers Discretion on how the information is presented to the user)


* Bonus Points
*  1) In addition to adding a class when a field is not valid display a message requesting the user to enter their information. 
      (Example Please Under Name)
*  2) Create a button that resets the form. 


* Developer notes
*  1) An error class named .error you can use this class to apply the proper css to an invalid element.
*  2) You can edit this form however you see fit as the engineer to achieve your goals. (i.e add ids or additional classes if needed)
*/

const randomForm = document.querySelector("#randomForm");
const nameField = document.querySelector("#name");
const birthday = document.querySelector("#birthday");
const res_code = document.querySelector("#registration");

function formValidation(form){
    if (form && form[0].value === ""){
        document.form.customerName.focus();
        nameField.classList.add("error");
    }

    if (form && form[1].value === ""){
        document.form.birthday.focus();
        birthday.classList.add("error");
    }

    if (form && form[2].value === -1){
        document.form.gender.focus();
    }

    if (form && form[3].value === -1){
        document.form.guestcount.focus();
    }

    if (form && form[4].value === ""){
        document.form.res_code.focus();
        res_code.classList.add("error");
    }

    return true;
}

randomForm.addEventListener("submit", event => {
  event.preventDefault(); // Stops the page from refreshing
  // screen clears and the message "Form submitted" is displayed
  if (formValidation(event.target.elements) == true){
      let message = "Form submitted";
      document.write(message.bold().fontcolor("blue").fontsize(7));
  }
});