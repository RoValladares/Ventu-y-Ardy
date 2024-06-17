let clickCounter = 0;

document.getElementById('eat-button').addEventListener('click', () => {
    clickCounter++;
    document.getElementById('click-counter').innerText = clickCounter;
});
