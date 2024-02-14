document.addEventListener('DOMContentLoaded', function () {
    const images = ['who.jpeg', 'who2.jpg', 'who3.jpg']; // массив путей к изображениям
    const imgElement = document.querySelector('.small-img');
    let currentIndex = 0;

    // Функция для изменения изображения
    function changeImage() {
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Изменение изображения каждые 3 секунды
    setInterval(changeImage, 3500);
});