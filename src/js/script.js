const modalOpen = document.querySelectorAll('[data-open]');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('[data-close]');



for (let i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click',() => {
        openModalWindow();
    });
};


modalClose.addEventListener('click', () => {
    closeModalWindow();
});

function openModalWindow() {
    modal.classList.add('show');
    modal.classList.remove('hide');
}
    

function closeModalWindow() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}


let offset = 0;
const sliderLine = document.querySelector('.houses_items-fhoto');

document.querySelector('.arrow_right').addEventListener('click', function(){
    offset = offset + 535;
    if (offset > 1605) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.arrow_left').addEventListener('click', function () {
    offset = offset - 535;
    if (offset < 0) {
        offset = 1605;
    }
    sliderLine.style.left = -offset + 'px';
});

//slider


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(nomer){
      showSlides(slideIndex+= nomer);      
}

function currentSlide(nomer){
      showSlides(slideIndex = nomer);      
}

function showSlides(n){
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    
    if(n > slides.length){
        slideIndex = 1;
    }
    
    if (n < 1){
        slideIndex = slides.length;
    }
    
    for(i=0; i<slides.length;i++){
        slides[i].style.display = "none";
    }     
    
    for(i=0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}


//filter 
const list = document.querySelector('.select_filter-list');
const items = document.querySelectorAll('.houses_items');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)
        switch(targetId) {
            case 'All':
                getItems('houses_items')
                break
            case '1Room': case '2Room':   case 'Studio': 
                getItems(targetId)
                break  
            
                    
        }
    })
}
filter();

function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'block'
        }else {
            item.style.display = 'none'
        }
    })
}

