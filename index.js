console.log(Notification.permission);

let inputBtnWeb = document.querySelector('.input-btn-web');

inputBtnWeb.addEventListener('click', () => {
    let emailInputWeb = document.querySelector('#form-input-web').value;
    if (emailInputWeb !== "" && emailInputWeb.includes("@") && emailInputWeb.includes(".")) {
        let emailNotification = document.createElement('div');
        emailNotification.id = "notification";
        emailNotification.innerHTML = `${emailInputWeb} has been submitted!`
        document.body.appendChild(emailNotification);
        setTimeout( function() {
            emailNotification.remove();
        }, 4000);
    }
})

