
if (window.screen.width<768){
    let navbar=document.querySelector('#navbar')
    let logo=document.querySelector('#logo')
    navbar.classList.add('bg-white','border-bottom-main','shadow')
    logo.src="./media/leone.copia2.jpg"
} 
else{

    document.addEventListener('scroll',()=>{
  
        let navbar=document.querySelector('#navbar')
        let logo=document.querySelector('#logo')
        if(window.pageYOffset >120){
            navbar.classList.add('bg-white','border-bottom-main')
            logo.src="./media/leone.copia.jpg" 
        } else{
            navbar.classList.remove('bg-white','border-bottom-main')
            logo.src="./media/leone.copia2.jpg"
        }
        console.log(window.pageYOffset)
    })

}