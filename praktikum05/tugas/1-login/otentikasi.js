function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username=="ahmad2017" && password=="integrity"){
         
        alert("Login Berhasil");
        return true;
    }else{
        alert("Login Gagal");
        return false;
    }
}