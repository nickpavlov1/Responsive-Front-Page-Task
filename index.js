let inputBtnWeb = document.querySelector('.input-btn-web');
let inputBtnPhone = document.querySelector('.input-btn-phone');
inputBtnWeb.addEventListener('click', () => {
    let emailInputWeb = document.querySelector('#form-input-web').value;
    if (emailInputWeb !== "" && emailInputWeb.includes("@") && emailInputWeb.includes(".")) {
        let emailNotification = document.createElement('div');
        emailNotification.id = "notification-web";
        emailNotification.innerHTML = `${emailInputWeb} has been submitted!`
        document.body.appendChild(emailNotification);
        setTimeout( function() {
            emailNotification.remove();
        }, 4000);
    }
})

inputBtnPhone.addEventListener('click', () => {
    let emailInputPhone = document.querySelector('#form-input-phone').value;
    if (emailInputPhone !== "" && emailInputPhone.includes("@") && emailInputPhone.includes(".")) {
        let emailNotification = document.createElement('div');
        emailNotification.id = "notification-phone";
        emailNotification.innerHTML = `${emailInputPhone} has been submitted!`
        document.body.appendChild(emailNotification);
        setTimeout( function() {
            emailNotification.remove();
        }, 4000);
    }
})

