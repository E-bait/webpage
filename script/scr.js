var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal() {
  document.body.classList.add('no-scroll'); 
  modal.style.display = "block";
}

// Присваиваем обработчик события для всех кнопок
var buttons = document.querySelectorAll(
    "#openModalBtn, #openModalBtn1, #openModalBtn2"
  );
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      modal.style.display = "block";
    });
  });

// Закрытие модального окна при клике на крестик
span.onclick = function () {
  document.body.classList.remove('no-scroll'); 
  modal.style.display = "none";
};

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  if (event.target == modal) {
    document.body.classList.remove('no-scroll'); 
    modal.style.display = "none";
  }
};
