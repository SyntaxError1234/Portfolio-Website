function submit()
{
    var title = document.getElementById("title_1").value;
    var from = document.getElementById("from1").value;
    var till = document.getElementById("till1").value;
    var company = document.getElementById("employer").value;
    var exp1 = document.getElementById("exp1").value;
    var exp2 = document.getElementById("exp2").value;
    var exp3 = document.getElementById("exp3").value;
    
    
    sessionStorage.setItem("title_1",title);
    sessionStorage.setItem("from1",from);
    sessionStorage.setItem("till1",till);
    sessionStorage.setItem("company",company);
    sessionStorage.setItem("exp1",exp1);
    sessionStorage.setItem("exp2",exp2);
    sessionStorage.setItem("exp3",exp3);
    window.location.href = "project.html";
    
}