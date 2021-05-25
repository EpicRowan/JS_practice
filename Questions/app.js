//Selectors

const btns = document.querySelectorAll(".q-button");


//Event Handlers


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        console.log("hi");
    });
});
