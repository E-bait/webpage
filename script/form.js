document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Сбор данных формы
    let formData = new FormData(this);

    // Отправка данных формы с помощью AJAX
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        let modalMessage = document.getElementById('modalMessage');
        if (data.includes("Письмо успешно отправлено!")) {
            modalMessage.textContent = "Ваше сообщение успешно отправлено.";
        } else {
            modalMessage.textContent = "Ошибка при отправке сообщения: " + data;
        }
        modal.style.display = "block";
    })
    .catch(error => {
        console.error('Ошибка:', error);
        let modalMessage = document.getElementById('modalMessage');
        modalMessage.textContent = 'Произошла ошибка при отправке сообщения.';
        modal.style.display = "block";
    });
});