const sliderPics = Array.from(document.getElementsByClassName('slider__item'))
let index = 0
let foo = (slide1, slide2) => {
    slide1.classList.toggle('slider__item_active');
    slide2.classList.remove('slider__item_active');
}

window.addEventListener('click', event => {
    if (event.target.classList.contains('slider__arrow_next')) {
        if (index < sliderPics.length - 1) {
            foo(sliderPics[index + 1], sliderPics[index])
            index++;
        } else {
            foo(sliderPics[index - (sliderPics.length - 1)], sliderPics[index])
            index = index - (sliderPics.length - 1);
        }
    } else if (event.target.classList.contains('slider__arrow_prev')) {
        if (index > 0) {
            foo(sliderPics[index - 1], sliderPics[index])
            index--;
        } else {
            foo(sliderPics[sliderPics.length - 1], sliderPics[index])
            index = index + (sliderPics.length - 1);
        }
    }  
})