document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll ('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.style.animationPlayState === 'paused') {
                box.style.animationPlayState = 'running'
            } else {
                box.style.animationPlayState = 'paused'
            }
        })
    })
})