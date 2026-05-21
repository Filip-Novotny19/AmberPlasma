const pswdToggle = document.querySelector('.pswdtoggle');
const toggleIcon = document.querySelector('.pswdtoggle i');
const form = document.querySelector('.butt');
const emailinput = document.querySelector('.mail');
const passinput = document.querySelector('.pswd input');
const modal = document.getElementById("modal");
const overlay = document.querySelector('#modalOverlay');
const exitbutt = document.querySelector(".exitbutt");

pswdToggle.addEventListener('click', () => {

    const ispswd = passinput.type === "password";

    toggleIcon.classList.toggle("fa-eye-slash");

    toggleIcon.classList.toggle("fa-eye");

    passinput.type = ispswd ? "text" : "password";

});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('click', (event) => {

    const userEmail = emailinput.value.trim();
    const pass = passinput.value.trim();

    if (pass && validateEmail(userEmail)) {


        document.getElementById("mail").textContent = userEmail;
        document.getElementById("pass").textContent = pass;

        modal.classList.remove("hidden");
        modal.classList.add("shown");
        overlay.classList.remove("hidden");
        overlay.classList.add("shown");


    } else {
        const emailp = document.getElementById("mail-error");
        const passp = document.getElementById("pass-error");
        event.preventDefault();
        if (!pass) {
            passp.style.visibility = "visible";
        }
        if (!validateEmail(userEmail)) {
            emailp.style.visibility = "visible";
        }
        emailinput.addEventListener('mousedown', () => {
            emailp.style.visibility = "hidden";
        });
        passinput.addEventListener('mousedown', () => {
            passp.style.visibility = "hidden";
        });

    }
});
exitbutt.addEventListener('click', () => {
    modal.classList.remove("shown");
    modal.classList.add("hidden");
    overlay.classList.remove("shown");
    overlay.classList.add("hidden");
});