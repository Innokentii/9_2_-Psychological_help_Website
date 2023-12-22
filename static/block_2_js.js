'use strict' // Установка JS на строгий режим написания кода;

//===================================================================================================//
//                                  Импортированные файлы и модули                                   //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//



//===================================================================================================//
//                                       Глобальные переменные                                       //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

let array_blocks = document.querySelectorAll('.arr_select_cl');
let text_reviews = document.querySelectorAll('.text_reviews_cl');
let array_reviews_one = document.querySelectorAll('.array_reviews_one_cl');
let array_reviews_two = document.querySelectorAll('.array_reviews_two_cl');
let reviews_h2 = document.getElementById('reviews_h2_id');

//===================================================================================================//
//                                 Одноразовые функции и события                                     //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Вызов функции адаптации размеров отзывов;
document.addEventListener('DOMContentLoaded', _=>{adaptation_text_f()});
window.addEventListener('resize', _=>{adaptation_text_f()});

//===================================================================================================//
//                      Многоразовые функции и события вызовов функций                               //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Функция адаптации размеров отзывов;
function adaptation_text_f() {
    console.log(1);
    let width_work = (1536 / window.innerWidth);
    let basa_width = 50;
    let zoom_width = (window.innerWidth / 770);
    let pad_width = (100000 / window.innerWidth)

    if (pad_width <= 80) {
        reviews_h2.style.paddingTop = `10px`;
    }
    else {
        reviews_h2.style.paddingTop = `${pad_width}px`;
    }

    if (window.innerWidth <= 770) {
        text_reviews.forEach((e)=>{e.style.width = 'calc(100% - 10px)'});
        array_reviews_one.forEach((e)=>{e.style.zoom = `${zoom_width}`});
        array_reviews_two.forEach((e)=>{e.style.zoom = `${zoom_width}`});
    }
    else {
        text_reviews.forEach((e)=>{e.style.width = `${(basa_width * width_work) - 5}vw`});
    }

    if (window.innerWidth <= 1024) {
        array_blocks.forEach((e)=>{e.style.display = 'none'});
    }
    else {
        array_blocks.forEach((e)=>{e.style.display = ''});
        array_blocks.forEach((e)=>{e.style.width = `${(basa_width / width_work) - 5}vw`});
    }
}

//===================================================================================================//
//                             Функции вызываемые другими функциями                                  //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//


