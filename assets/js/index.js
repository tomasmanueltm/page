let $ = (e) => document.querySelector(e),   
    btnToggle = $(".btn-toogle"),
    ulToggle = $("header ul")
    ;


btnToggle.addEventListener("click", function(){
    
    ulToggle.classList.add("block", "keyUl");
})