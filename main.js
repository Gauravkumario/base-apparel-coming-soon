const btn = document.querySelector('#arrow-logo');
btn.addEventListener('click', () => {
    validation();
})

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        document.getElementById('submit-txt').style.display = "block";
        document.getElementById('error-txt').style.display = "";
        document.getElementById('user-mail').style.border = ""
        document.getElementById('email').value = ""
        document.getElementById('error-logo').style.display = "none"
    }

    else if(email.length == 0)
    {
        document.getElementById('user-mail').style.border = ""
        document.getElementById('error-txt').style.display = "";
        document.getElementById('submit-txt').style.display = "";
        document.getElementById('error-logo').style.display = ""
    }

    else
    {
        document.getElementById('user-mail').style.border = "2px solid hsl(0, 93%, 68%)"
        document.getElementById('error-txt').style.display = "block";
        document.getElementById('error-logo').style.display = "flex"
        document.getElementById('submit-txt').style.display = "";
    }
}