console.log(sessionStorage.getItem("name"));
document.getElementById("fuck").addEventListener("submit", function(event){
    // event.preventDefault(); // Prevents the form from submitting the traditional way

    // Retrieve input values
    var w = document.getElementById("myname").value;
    var surname = document.getElementById("surname").value;
    // var location = document.getElementById("location").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    console.log(w);
    // Assuming you have two input fields with IDs inputField1 and inputField2
    sessionStorage.setItem("name", w);
    sessionStorage.setItem("surname", surname);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("email", email);

    console.log("Data stored in localStorage");
});
// function submit()
// {
    
//     var w = document.getElementById("myname").value;
//     var surname = document.getElementById("surname").value;
//     // var location = document.getElementById("location").value;
//     var address = document.getElementById("address").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;

//     // Assuming you have two input fields with IDs inputField1 and inputField2
//     localStorage.setItem("name", w);
//     localStorage.setItem("surname", surname);
//     localStorage.setItem("address", address);
//     localStorage.setItem("phone", phone);
//     localStorage.setItem("email", email);
    
//     console.log(w);
//     // Store the values in sessionStorage
//     // sessionStorage.setItem("name",name);
//     // sessionStorage.setItem("surname",surname);
//     // sessionStorage.setItem("location",location);
//     // sessionStorage.setItem("phone",phone);
//     // sessionStorage.setItem("email",email);
//     window.location.href = "about.html";
// }
function redirect()
{
    window.location.href = "output.html"
}