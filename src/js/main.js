document.addEventListener('DOMContentLoaded', () => {
    console.log(123)

    const navBtn = document.querySelector('.button-nav');
    const navBlock = document.querySelector('.header-navigation');

    navBtn.addEventListener('click', function() {

        navBlock.classList.toggle('header-navigation__active');

        navBlock.addEventListener('click', function(event){

            if(event.target.classList.contains('header-navigation__link')){
                navBlock.classList.remove('header-navigation__active');
            }
        });
    })
})
