let $ = (e) => document.querySelector(e),   
    btnToggle = $(".btn-toogle"),
    ul = $("header ul")
    ;


btnToggle.addEventListener("click", function(){

    if(ul.classList.value != "block is") 
    {
        ul.classList.add("block", "is");
    }
    else
    {
        ul.classList.remove("block", "is");
    }
   
})

ul.addEventListener("click", function(){
    ul.classList.remove("block", "is");
})

