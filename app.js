const passwordbox = document.querySelector("#password");
const length = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+-={}[]|\<>,.?/";
const allcharacter = uppercase+lowercase+number+symbol;

function createpassword(){
    let password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allcharacter[Math.floor(Math.random() * allcharacter.length)];
    }
    passwordbox.value = password;
}

function copypassword() {
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value)
}