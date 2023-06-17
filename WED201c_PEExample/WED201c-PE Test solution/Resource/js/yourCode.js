function Show() {
    if (document.getElementById("myform").style.display == "block") {
        document.getElementById("myform").style.display = "none";
        document.getElementById('mytext').innerHTML = "SHOW REGISTER FORM";
    } else {
        document.getElementById("myform").style.display = "block";
        document.getElementById('mytext').innerHTML = "HIDE REGISTER FORM";
    }
}

function checkForm() {
    var Yourname = document.getElementById('t1').value; 
    var Email = document.getElementById('t2').value;
    if (Yourname == "") {
        alert("please fill your name");
    } else {  
        if (Email == "") {
            alert("please fill your email");
        }     
    } 
}
