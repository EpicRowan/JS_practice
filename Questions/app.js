//Selectors

// const btns = document.querySelectorAll(".q-button");



// //Event Handlers

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         const question= e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });


const questions = document.querySelectorAll('.questions');

questions.forEach(function(question) {
    const btn = question.querySelector('.q-button');
    console.log(btn);
});