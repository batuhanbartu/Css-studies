document.addEventListener('DOMContentLoaded', () => {
    const nameContainer = document.querySelector('.name-container');
    const letters = document.querySelectorAll('.letter');

    nameContainer.addEventListener('mouseenter', () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.textContent = letter.getAttribute('data-letter');
                letter.style.transform = 'rotateY(360deg)';
                letter.style.color = '#333'; // Değiştirilmiş harfler için renk değişimi
            }, index * 100);
        });
    });
});
