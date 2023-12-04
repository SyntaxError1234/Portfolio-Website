function submit()
{
    var proname = document.getElementById("proname").value;
    var from = document.getElementById("from2").value;
    var till = document.getElementById("till2").value;
    var pro1 = document.getElementById("pro1").value;
    var pro2 = document.getElementById("pro2").value;
    var pro3 = document.getElementById("pro3").value;
    
    // Store the values in sessionStorage
    sessionStorage.setItem("proname",proname);
    sessionStorage.setItem("from2",from);
    sessionStorage.setItem("till2",till);
    sessionStorage.setItem("pro1",pro1);
    sessionStorage.setItem("pro2",pro2);
    sessionStorage.setItem("pro3",pro3);
    // window.location.href = "resume.html";
    window.location.href = "output.html";
}