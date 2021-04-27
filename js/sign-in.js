function scrollApear(){

    var text=document.getElementById('text');
    
    var textPosition=text.getBoundingClientRect().top;
    
    var screenPosition=window.innerHeight;
    
        if(textPosition < screenPosition){
            text.classList.add('animation');
        }
    }
    
    window.addEventListener('scroll',scrollApear);