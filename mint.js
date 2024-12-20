const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-brightness-low-fill');
    if (this.classList.toggle('bi-moon')) {
        body.style.background = 'white';
        body.style.color= 'black';
        body.style.transition = '2s'
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'
    }
})