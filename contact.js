document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || phone === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Invalid email");
        return;
    }

    if(isNaN(phone)){
        alert("Phone must contain only numbers");
        return;
    }

    alert("Form submitted successfully");
});