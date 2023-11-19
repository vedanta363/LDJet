function login(){
    var usrname = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    if (usrname == 'admin' && passwd == "P@ssw0rd123"){
        window.location.assign("admin.html");
        alert("login Successful Welcome Admin");
    }
    else{
        alert("Login Failed");
    }
}