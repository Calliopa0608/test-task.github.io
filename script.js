let bg = document.querySelector('.knight');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    bg.style.transform = 'translate(-' + x * 50 + 'px)';
});