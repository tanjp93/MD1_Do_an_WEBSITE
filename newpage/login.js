function loginWebsite() {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;
    let emailLocalStorage = localStorage.getItem(email);
    let emailJson = JSON.parse(emailLocalStorage);
    if (email.trim() === "") {
        document.getElementById("errorEmailLogin").innerHTML = "Vui lòng nhập Email"
        return
    }
    if (password.trim() === "") {
        document.getElementById("errorPasswordLogin").innerHTML = "Vui lòng nhập Password"
        return
    } else {
        if (email === emailJson.email && password === emailJson.password) {
            let registerSuccess = confirm("Đăng nhập thành công");
            if (registerSuccess) {
                location.href = "../index.html"
            }
        } else {
            document.getElementById("errorPasswordLogin").innerHTML = "Email hoặc Password không đúng"
        }
    }
}