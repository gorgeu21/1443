// Получаем элементы
const playPauseBtn = document.getElementById('play-pause');
const audio = document.getElementById('audio');
const themeToggleBtn = document.getElementById('theme-toggle');

// Функция для переключения плей/паузы
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚'; // меняем на паузу
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️'; // меняем на плей
    }
});

// Переключение темной и светлой темы
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Меняем иконку переключателя
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '🌕'; // Иконка светлой темы
    } else {
        themeToggleBtn.textContent = '🌙'; // Иконка темной темы
    }
});

// Устанавливаем начальную тему по умолчанию
document.body.classList.add('light-theme');
