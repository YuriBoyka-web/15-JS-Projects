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
        const isEmailValid = checkLength(email)
        const isPhoneNumberValid = checkLength(PhoneNumber,11);
        const isPasswordValid = checkLength(Password,6,14);
        const isPasswordsMatch = checkLength(Password,ConfirmPassword);
    }
});
function checkLength(input,min,max)
{
    if(input.value.length < min)
    {
        showError(input, `${formatFieldName(input)}must be at least ${min} characters.`)
        return false;
    }
    else if(input.value.length < max)
    {
        showError(input, `${formatFieldName(input)}must be less than ${max} characters.`)
        return false;
    }
    else
    {
        showSuccess(input);
        return true;
    }
}


function checkRequired(inputArray)
{
   let isValid = true;
   inputArray.forEach(input => {
    //!  Fill the Values inside the fields
    if(input.value.trim() === "")
    {
        showError(input, `${formFieldName (input)} is required`)
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
    return input.id.charAt(0).touUpperCase() +input.id.slice(1);
}
function showError(input, message)
{
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const small =  formGroup.querySelector("small");
    small.innerText =  message;
}
function showSuccess()
{
     const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}