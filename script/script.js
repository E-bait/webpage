document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const squaresContainer = document.querySelector('.squares-container');
    let currentSlide = 0; // Индекс текущего слайда

    // Создаем квадратики для каждого слайда
    slides.forEach((slide, index) => {
        const square = document.createElement('div');
        square.classList.add('square');
        squaresContainer.appendChild(square);

        // Добавляем обработчик клика для переключения слайдов
        square.addEventListener('click', () => {
            setActiveSlide(index);
        });

        // Обработчики событий для перетаскивания текста
        let isDragging = false;
        let initialX = null;

        slide.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX;
        });

        slide.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - initialX;
                if (Math.abs(deltaX) > 50) {
                    const nextSlideIndex = deltaX > 0 ? Math.max(currentSlide - 1, 0) : Math.min(currentSlide + 1, slides.length - 1);
                    setActiveSlide(nextSlideIndex);
                    isDragging = false;
                    initialX = null;
                }
            }
        });
    });

    // Функция для установки активного слайда и цвета квадратика
    function setActiveSlide(index) {
        slides.forEach((slide, slideIndex) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        const squares = squaresContainer.querySelectorAll('.square');
        squares.forEach((square, squareIndex) => {
            if (squareIndex === index) {
                square.style.backgroundColor = 'red'; // Установка активного цвета квадратика
            } else {
                square.style.backgroundColor = '#ccc'; // Возвращение стандартного цвета квадратика
            }
        });

        currentSlide = index; // Обновляем индекс текущего слайда
    }

    // Функция для переключения слайдов по таймеру
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        setActiveSlide(currentSlide);
    }

    // Запускаем автоматическое переключение слайдов через каждые 5 секунд
    setInterval(autoSlide, 6000);

    // По умолчанию устанавливаем первый слайд активным
    setActiveSlide(0);
});
