function submit()
{
    var title = document.getElementById("title").value;
    var employer = document.getElementById("employer").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    
    // Store the values in sessionStorage
    sessionStorage.setItem("title",title);
    sessionStorage.setItem("employer",employer);
    sessionStorage.setItem("city",city);
    sessionStorage.setItem("country",country);
    sessionStorage.setItem("start",start);
    sessionStorage.setItem("end",end);
    window.location.href = "page3.html";
    // window.location.href = "output.html";
}