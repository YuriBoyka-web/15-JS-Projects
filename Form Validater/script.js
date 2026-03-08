const form = document.getElementById('registration-form');
const Username = document.getElementById('UserName');
const Email = document.getElementById('Email');
const PhoneNumber = document.getElementById('PhoneNumber');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const isRequired = checkRequired([Username,Email,PhoneNumber,Password,ConfirmPassword])
     
    let isFormValid = isRequired;
    if(isRequired)
    {
        const isUsernameValid = checkLength(Username,4,10);
        const isEmailValid = checkEmail(Email);
        const isPhoneNumberValid = checkPhone(PhoneNumber);
        const isPasswordValid = checkLength(Password,6,14);
        const isPasswordsMatch = checkPassword(Password,ConfirmPassword);
        isFormValid = isUsernameValid && isEmailValid && isPhoneNumberValid && isPasswordValid && isPasswordsMatch;
    }
    if(isFormValid)
    {
        alert("Registration Successfull")
        form.reset();
        document.querySelectorAll(".form-group").forEach((group) => group.className = "form-group"  )
    }
});
function checkLength(input,min,max)
{
    if(input.value.length < min)
    {
        showError(input, `${formatFieldName(input)} must be at least ${min} characters.`)
        return false;
    }
    else if(input.value.length > max)
    {
        showError(input, `${formatFieldName(input)} must be less than ${max} characters.`)
        return false;
    }
    else
    {
        showSuccess(input);
        return true;
    }
}
function checkEmail(email)
{
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(emailReg.test(email.value.trim()))
{
    showSuccess(email)
    return true;
}
else
{
    showError(email,"Email is not valid");
    return false;
}
}
function checkPhone(phone) {
const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;

  if (phoneRegex.test(phone.value.trim())) {
    showSuccess(phone);
    return true;
  } else {
    showError(phone, "Phone number is not valid");
    return false;
  }
}
function checkPassword(input1,input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2,"Password Doesnt Match")
        return false;
    }
    return true;
}
function checkRequired(inputArray)
{
   let isValid = true;
   inputArray.forEach(input => {
    //!  Fill the Values inside the fields
    if(input.value.trim() === "")
    {
        showError(input, `${formatFieldName(input)} is required`)
        isValid = false;
    }
    else
    {
        showSuccess(input)
    }
   });
   return isValid
}
function formatFieldName(input)
{
    return input.id.charAt(0).toUpperCase() +input.id.slice(1);
}
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}
function showSuccess(input)
{
     const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}