var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var countryInput = document.getElementById("country")
var phoneInput = document.getElementById("phone")
var termsInput = document.getElementById("checkbox")
var form = document.getElementById("form")

const send = ()=>{

    var validation = true

    if(nameInput.value.length < 2){
        document.getElementById("nameError").style.opacity = 1
        validation = false
    }

    if(emailInput.value == "" || emailInput.value ==null || !emailInput.value.includes("@"))
    {
        return false
    }

    if(countryInput.value == "" || countryInput.value ==null)
    {
        return false
    }

    if(!phoneInput.value.startsWith("0")){
        document.getElementById("phoneError").style.opacity = 1
        validation = false
    }

    if(validation == false){
        alert("Please re-check your input")
    }
    else if(validation == true){
        alert("Form submitted succesfully")
        form.submit()
    }
}