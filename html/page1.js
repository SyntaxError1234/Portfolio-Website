function submit()
{
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var pincode = document.getElementById("pincode").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    // Store the values in sessionStorage
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("surname",surname);
    sessionStorage.setItem("city",city);
    sessionStorage.setItem("country",country);
    sessionStorage.setItem("pincode",pincode);
    sessionStorage.setItem("phone",phone);
    sessionStorage.setItem("email",email);
    window.location.href = "page2.html";
}
function redirect()
{
    window.location.href = "output.html"
}