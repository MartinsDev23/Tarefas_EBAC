addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector(".fixed-button");
    
    function fixaOHeader() {
        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }
    

    window.addEventListener('scroll', fixaOHeader);

})