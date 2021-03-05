var IMG_WIDTH = '22'; // 22rem
var carouselSlider = document.querySelector('.product-carousel__inner');
var carouselProducts = document.querySelectorAll('.product-carousel__inner > div');
var btnPrev = document.querySelector('#btnPrev');
var btnNext = document.querySelector('#btnNext');
var index = 0;

btnPrev.addEventListener('click', function(){
    if(index == 0){
        index = carouselProducts.length - 1;
    }else{
        index--;
    }

    carouselSlider.style.transform = `translateX(-${IMG_WIDTH * index *4}rem)`;
});

btnNext.addEventListener('click', function(){
    if(index ==  carouselProducts.length - 1){
        index = 0;
    }else{
        index++;
    }

    carouselSlider.style.transform = `translateX(-${IMG_WIDTH * index *4}rem)`;
});

/*var autoNextSlide;
if(screen.width > 1024){
    autoNextSlide = setInterval(function(){
        btnNext.click();
    },3000);
}else {
   clearInterval(autoNextSlide);
}*/


