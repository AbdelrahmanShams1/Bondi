const sections = document.querySelectorAll('.event[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -20;
        const sectionId = current.getAttribute('id')

        
        const link = document.querySelector('.collapse a[href*=' + sectionId + ']');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            link.classList.add('active-link')
        }else{
            link.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
