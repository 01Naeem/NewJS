document.getElementById("myform").addEventListener("submit",validate);

function validate(){

    // to prevent the default behavior of form submition
    email.preventDefault();

    // Fectch input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passsword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    console.log(name, email, password, confirmPassword);

    if (name == "" || email == "" || password == "" || confirmPassword == ""){
        alert("All feilds are requred");
        return false;
    };

    if (password !== confirmPassword){
        alert("Passwords do not match");
        return false;
    }
    alert("Form sumbmitted successfully");
};
