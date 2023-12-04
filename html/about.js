function submit()
{
    var about = document.getElementById("about").value;
    var skill1 = document.getElementById("skill1").value;
    var skill2 = document.getElementById("skill2").value;
    var skill3 = document.getElementById("skill3").value;
    var skill4 = document.getElementById("skill4").value;
    var skill5 = document.getElementById("skill5").value;
    
    // Store the values in sessionStorage
    sessionStorage.setItem("about",about);
    sessionStorage.setItem("skill1",skill1);
    sessionStorage.setItem("skill2",skill2);
    sessionStorage.setItem("skill3",skill3);
    sessionStorage.setItem("skill4",skill4);
    sessionStorage.setItem("skill5",skill5);
    window.location.href = "experience.html";
    // window.location.href = "output.html";
}