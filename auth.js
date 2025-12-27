function login() {
const u = username.value;
const p = password.value;
if (u === 'admin' && p === '12345') {
localStorage.setItem('login', 'true');
window.location = 'admin.html';
} else {
msg.innerText = 'Login gagal';
}
}


function cekLogin() {
if (localStorage.getItem('login') !== 'true') {
window.location = 'login.html';
}
}


function logout() {
localStorage.removeItem('login');
window.location = 'login.html';
}