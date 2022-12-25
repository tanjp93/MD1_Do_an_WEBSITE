class User {
    id;
    name;
    username;
    email;
    password;

    constructor(id, name, username, email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
}
let name;
    let username;
    let password;
    let email;
    let rePassword;
    let checkValidate = false;
    let listUser = JSON.parse(localStorage.getItem('list_user'));
    if(listUser==null){
    listUser = []
}
    console.log('list User id--->', listUser)
    function validate() {
    name = document.getElementById('name').value;
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    rePassword = document.getElementById('re-password').value;
    if (name.trim() === '') {
    document.getElementById('validate_name').innerHTML = '<label style="color: red">The name is required!</label>'
    checkValidate = false;
} else {
    document.getElementById('validate_name').innerHTML = ''
    checkValidate = true;
}
    if (username.trim() === '') {
    console.log('vao if user name ------>')
    document.getElementById('validate_username').innerHTML = '<label style="color: red">The name is required!</label>'
    checkValidate = false;
} else {
    let checkExisted = false;
    for (let i = 0; i < listUser.length; i++) {
    if (username === listUser[i].username) {
    checkExisted = true;
    break
}
}
    if (checkExisted) {
    checkValidate = false;
    document.getElementById('validate_username').innerHTML = '<label style="color: red">The username existed!</label>'
} else {
    document.getElementById('validate_username').innerHTML = ''
    checkValidate = true;
}
}

    console.log('email --->', email)
    if (email.trim() === '') {
    console.log('vao ìf khong')
    document.getElementById('validate_mail').innerHTML = '<label style="color: red">The name is required!</label>'
    checkValidate = false;
} else {
    console.log('vao else hay khong')
    if (!validateEmail(email)) {
    document.getElementById('validate_mail').innerHTML = '<label style="color: red">The email invalid!</label>'
    checkValidate = false;
} else {
    let checkEmailExisted = false;
    for (let i = 0; i < listUser.length; i++) {
    if (email === listUser[i].email) {
    checkEmailExisted = true;
    break
}
}
    if (checkEmailExisted) {
    checkValidate = false;
    document.getElementById('validate_mail').innerHTML = '<label style="color: red">The username existed!</label>'
} else {
    document.getElementById('validate_mail').innerHTML = ''
    checkValidate = true;
}
}
}
    if (password.trim() === '') {
    document.getElementById('validate-password').innerHTML = '<label style="color: red">The name is required!</label>'
    checkValidate = false;
} else {
    if (rePassword !== password) {
    document.getElementById('validate-re').innerHTML = '<label style="color: red">The repeat password not match!</label>'
    checkValidate = false
} else {
    document.getElementById('validate-password').innerHTML = ''
    document.getElementById('validate-re').innerHTML = ''
    checkValidate = true;
    // return;
}
    // return;

}
}
    function sankou_register() {
    // validate();
    if (checkValidate) {
    // let listUser = localStorage.getItem('list_user');
    let id = 0;
    let user = new User(id, name, username, email, password)
    console.log('user --->', user)
    if (listUser.length==0) {
    // listUser = [];
    id = 1;
    user.setId(id);
    listUser.push(user);
    console.log('listUser --->', listUser)
} else {
    user.setId(listUser[listUser.length - 1].id + 1)
    listUser.push(user);
}
    localStorage.removeItem('list_user')
    localStorage.setItem('list_user', JSON.stringify(listUser));
    location.href = 'login.html';
}
}

    function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
}
    // alert("You have entered an invalid email address!")
    return (false)
}