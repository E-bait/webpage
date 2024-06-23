function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var privacy = document.getElementById("consent").checked;

    // Проверка на пустые поля
    if (name === "" || phone === "" || email === "" || message === "") {
        alert("Пожалуйста, заполните все поля");
        return false;
    }

    // Проверка корректности email
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert("Некорректный адрес электронной почты");
        return false;
    }

    // Проверка корректности номера телефона
    // Позволяет вводить номер в форматах: +7(999)123-45-67, 79991234567, 89991234567
    if (!phone.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)) {
        alert("Некорректный номер телефона. Введите номер в формате +7(999)123-45-67 или 89991234567");
        return false;
    }

    // Проверка согласия с политикой конфиденциальности
    if (!privacy) {
        alert("Пожалуйста, согласитесь с политикой конфиденциальности");
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('message', message);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("Сообщение успешно отправлено")) {
                alert("Сообщение успешно отправлено");
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("consent").checked = false;
            } else {
                alert("Произошла ошибка при отправке сообщения.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Произошла ошибка при отправке сообщения.");
        });
    }
}
