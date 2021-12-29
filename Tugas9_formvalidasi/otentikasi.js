function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "Wahyu14" && password.value === "123456"){
        alert("Login Sukses")
        window.location.href = "LoginSukses.html";
    }
    else{
        alert("username atau password anda salah");
        pw.value="";
        uname.focus();
    }
}