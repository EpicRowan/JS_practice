//Selectors

const btns = document.querySelectorAll(".q-button");


//Event Handlers

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const question= e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
