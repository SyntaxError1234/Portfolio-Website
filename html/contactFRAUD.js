function submit()
{
    
    var w = document.getElementById("myname").value;
    var surname = document.getElementById("surname").value;
    // var location = document.getElementById("location").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Assuming you have two input fields with IDs inputField1 and inputField2
    localStorage.setItem("name", w);
    localStorage.setItem("surname", surname);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    
    window.location.href = "output.html";
}
function redirect()
{
    window.location.href = "output.html"
}