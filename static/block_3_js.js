'use strict' // Установка JS на строгий режим написания кода;

//===================================================================================================//
//                                  Импортированные файлы и модули                                   //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

//===================================================================================================//
//                                       Глобальные переменные                                       //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

let record_phone_text = document.getElementById('record_phone_text_id'); // (поле ввода номера телефона);
let record_FIO_text = document.getElementById('record_FIO_text_id'); // (поле ввода ФИО);
let record_area_text = document.getElementById('record_area_text_id'); // (поле ввода проблем и пожелания);
let record_buttom = document.getElementById('record_buttom_id'); // (кнопка записи на прием);

let cart_modal_record = document.getElementById('cart_modal_record_id'); // (карточка модального окна);
let fog_modal_record = document.getElementById('fog_modal_record_id'); // (туман модального окна);

//===================================================================================================//
//                                 Одноразовые функции и события                                     //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Закрытия модального окна принятия записи в начале работы;
cart_modal_record.style.display = 'none';
fog_modal_record.style.display = 'none';

//===================================================================================================//
//                      Многоразовые функции и события вызовов функций                               //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Функция контроля адекватной записи номера телефона;
record_phone_text.addEventListener('keydown', (e)=>{
    if (['1','2','3','4','5','6','7','8','9','0','+','(',')',' ','Backspace'].includes(e.key) == false) {
        e.preventDefault();
    }
});

// Функция контроля адекватной записи ФИО;
record_FIO_text.addEventListener('keydown', (e)=>{
    if ([',','?','.','{','}','[',']',"\\",'|','/',':',';','!','&','^','%','#','№','+','-','*','0','1','2','3','4','5','6','7','8','9'].includes(e.key) == true) {
        e.preventDefault();
    }
});

// Функция открытия модального окна принятия записи;
record_buttom.onclick = () => {
    let num_len_phone = String(record_phone_text.value).split('').length; // (количество цыфр в прописанном номере);
    let num_len_FIO = String(record_phone_text.value).split('').length; // (количество букв в прописанном ФИО);

    // проверка на адекватный запись данных;
    if (num_len_phone >= 11 && num_len_FIO >= 2) { 
        cart_modal_record.style.display = '';
        fog_modal_record.style.display = '';
        record_phone_text.setAttribute('style', 'color: ""; text-decoration-line: ""; text-decoration-style: ""; text-decoration-color: ""; outline: ""; background-color: "";');
        record_FIO_text.setAttribute('style', 'color: ""; text-decoration-line: ""; text-decoration-style: ""; text-decoration-color: ""; outline: ""; background-color: "";');
        record_phone_text.value = '';
        record_FIO_text.value = '';
        record_area_text.value = '';
    }
    else {
        record_phone_text.setAttribute('style', 'color: red; text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red; outline :2px dotted red; background-color:rgba(255,0,0,0.05);');
        record_FIO_text.setAttribute('style', 'color: red; text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red; outline :2px dotted red; background-color:rgba(255,0,0,0.05);');
    }
}

// Функция закрытия модального окна принятия записи;
cart_modal_record.onclick = () => {
    cart_modal_record.style.display = 'none';
    fog_modal_record.style.display = 'none';
}

//===================================================================================================//
//                             Функции вызываемые другими функциями                                  //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//


