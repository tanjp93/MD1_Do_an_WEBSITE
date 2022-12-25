class Users {
    id;
    name;
    email;
    password

    constructor(name, email, password) {
        // this.id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // getId(){
    //     return this.id
    // }
    // setId(id){
    //     this.id
    // }
    getName() {
        return this.name
    }

    setName(name) {
        this.name
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email
    }

    getPassword() {
        return this.password
    }

    setPassword(password) {
        this.password
    }
}


function validatePassword(pw) {
    return /[A-Z]/       .test(pw) &&
        /[a-z]/       .test(pw) &&
        /[0-9]/       .test(pw) &&
        // /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;

}
// let a="??????????"
// let b=validatePassword(a);
// console.log("b>>>>>>",b)


let check;

function checkSignUp() {
    let userName = document.getElementById("inputNameUser").value;
    let email = document.getElementById("inputEmailUser").value;
    let password = document.getElementById("inputPassword").value;
    let rePassword = document.getElementById("reInputPassword").value;
    let checkBox = document.getElementById("checkBox").checked;
    let checkUser = false;
    let checkEmail = false;
    let checkPassword = false;
    let checkRePassword = false;
    check = false;
    if (userName.trim() == "") {
        document.getElementById("errorUser").innerHTML = " Tên người dùng không được để trống";
        return;
    } else {
        document.getElementById("errorUser").innerHTML = "";
        checkUser = true
    }
    if (email.trim() == "") {
        document.getElementById("errorEmail").innerHTML = " Email không được để trống"
        return
    } else if (validateEmail(email)) {
        document.getElementById("errorEmail").innerHTML = "";
        checkEmail = true;
    } else {
        document.getElementById("errorEmail").innerHTML = "Yêu cầu nhập đúng định dạng";
        checkEmail = false
    }
    if (password.trim() == "") {
        document.getElementById("errorPassword").innerHTML = " Password không được để trống"
        return
    } else {
        if (password.length < 6) {
            document.getElementById("errorPassword").innerHTML = " Password phải nhiều hơn 6 ký tự"
            return
        } else if (validatePassword(password)) {
            document.getElementById("errorPassword").innerHTML = "";
            checkPassword = true;
        } else {
            document.getElementById("errorPassword").innerHTML = "Password phải bao gồm chữ cái viết hoa,thường,kí tự đặc biệt và số";
            checkPassword = false;
        }
    }
    if (rePassword.trim() == "") {
        document.getElementById("errorRePassword").innerHTML = " Xin vui lòng nhập lại Password";
    } else if (rePassword.trim() === password.trim()) {
        document.getElementById("errorRePassword").innerHTML = "";
        checkRePassword = true;
    } else {
        document.getElementById("errorRePassword").innerHTML = "Password bạn nhập không trùng khớp"
        checkRePassword = false;
    }
    if (checkUser && checkEmail && checkPassword && checkRePassword && checkBox) {
        check = true;
    }
}

function signUp() {
    if (check) {
        let userName = document.getElementById("inputNameUser").value;
        let email = document.getElementById("inputEmailUser").value;
        let password = document.getElementById("inputPassword").value;
        let rePassword = document.getElementById("reInputPassword").value;
        let user = new Users(userName, email, password);
        let user_json = JSON.stringify(user);
        localStorage.setItem(email, user_json);
        let registerSuccess = confirm("Đăng kí thành công\n" + "User  :" + userName + "\n" + "Email đăng kí:  " + email);
        if (registerSuccess) {
            location.href = "../index.html"
        }
    } else {
        document.getElementById("failRegister").innerHTML = "Đăng nhập không thành công"
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
