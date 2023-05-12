const dlMode = document.getElementById('dl-mode');


// let obj = {
//     name : 'Tural',
//     surname: 'Kalbaliyev',
//     email: 'tural@code.edu.az',
//     password: 'askokuskokalbali'
// }

// console.log(obj);
// console.log(JSON.stringify(obj));
// console.log('{"name":"Tural","surname":"Kalbaliyev","email":"tural@code.edu.az","password":"askokuskokalbali"}');
// console.log(JSON.parse('{"name":"Tural","surname":"Kalbaliyev","email":"tural@code.edu.az","password":"askokuskokalbali"}'));

changeMode();

dlMode.addEventListener('click', () => {
    const current = localStorage.getItem("activeMode")
    if (current == 'dark') {
        localStorage.setItem('activeMode', 'light')
    }
    else {
        localStorage.setItem('activeMode', 'dark')
    }
    changeMode();
});
function changeMode() {
    const currentMode = localStorage.getItem('activeMode');
    if (currentMode == 'dark') {
        dlMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
        </svg>`;
    }
    else {
        dlMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24"
        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z">
        </path></svg>`;
    }
    document.body.className = currentMode;
}
createUsersKey();
function createUsersKey() {
    if (localStorage.getItem('users') == null) {
        localStorage.setItem('users', '[]')
    }
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
