let lang = 'ru_RU'; // Язык

// let cart = []; // Корзина


//языки переключение и загрузка


let transns = {
    ru_RU: {
        menu: 'Меню',
        tips: 'Чаевые',
        waiter: 'Позвать официанта',
        bill: 'Попросить счёт',
        feedback: 'Оставить отзыв',
        waiter_footer: 'Официант',
        bill_footer: 'Счёт',
        basket_back:'Корзина',
        ok: 'Окей',
        pay_card: 'Оплата картой',
        pay_cash: 'Оплата наличными',
        order: 'Заказать',
        thank: 'Спасибо за заказ!',
        gramm: 'г',
        about: 'О продукте',
        kcal: 'ккал',
        kcal_text: 'Энергетическая ценность',
        weight: 'Вес',
        fats: 'Жиры',
        proteins: 'Белки',
        carbohydrates: 'Углеводы'

    },
    en_GB: {
        menu: 'Menu',  
        tips: 'Tips',
        waiter: 'Waiter',    
        bill: 'Bill',  
        feedback: 'Feedback',
        waiter_footer: 'Waiter',
        bill_footer: 'Bill',
        basket_back: 'Basket',
        ok: 'Ok',
        pay_card: 'Pay by card',
        pay_cash: 'Pay by cash',
        order: 'Order',
        thank: 'Thank you for ordering!',
        gramm: 'g',
        about: 'About the product',
        kcal: 'kcal',
        kcal_text: 'Calorie content',
        weight: 'Weight',
        fats: 'Fats',
        proteins: 'Proteins',
        carbohydrates: 'Carbohydrates',
    }
};


let langs = [
    {
        id: "E95NdgQ",
        name: "English",
        native: "English",
        code: "en",
        regional: "en_GB"
    },
    {
        id: "k75yxXL",
        name: "Australian English",
        native: "Australian English",
        code: "en-AU",
        regional: "en_AU"
    },
    {
        id: "93X3d5R",
        name: "British English",
        native: "British English",
        code: "en-GB",
        regional: "en_GB"
    },
    {
        id: "eNXz6Xy",
        name: "Canadian English",
        native: "Canadian English",
        code: "en-CA",
        regional: "en_CA"
    },
    {
        id: "7NXMQXQ",
        name: "U.S. English",
        native: "U.S. English",
        code: "en-US",
        regional: "en_US"
    },
    {
        id: "wygkwg1",
        name: "Russian",
        native: "Русский",
        code: "ru",
        regional: "ru_RU"
    }
    
]

function translate(lang_id){
    lang = langs[lang_id].regional;
    if (typeof transns[lang] != 'undefined') {
        $.each(transns[lang],function(key,val){
            $('[data-label="' + key + '"]').text(val);
        });
        $('.menu__lang').text(transns[lang].native);
    }
}

// Данные

let menu = [
    {   id: "334544",
        img: '<img src="https://i.pinimg.com/736x/e6/fa/fd/e6fafdbb5aefbf7de67dcdf8bc9c8149.jpg" alt="#"/>',
        name: "Суп грибной",
        weight: 190,
      
        descr: "Белое куриное мясо в хрустящей панировке, ломтик помидора, листья салата и ломтики твёрдого сыра, заправленные специальным соусом и завёрнутые в пшеничную лепёшку",
        calories: 552,
        fats: 46,
        proteins: 18,
        carbohydrates: 38,
        price: 225,
        tags: [
                {
                    title: 'Hot',
                    color: 'red',
                },
                {
                    title: 'Vegan',
                    color: 'green',
                },
            ],

    },
    
    
];

//навигация по страницам


$(document).ready(function() {

    $('.menu__select--page-language').html('');

    $.each(langs,function(key,item){

        if (typeof transns[item.regional] != 'undefined'){
            $('.menu__select--page-language').append(
                '<li class="menu__option" data-id="' + key + '">' + item.native + '</li>'
            );
        }

    });


    $('.menu__product').html('');

    $.each(menu,function(key,item){

        $('.menu__product').append(
          
           
            '<div class="menu__product-img" data-id="' + key + '">' + item.img + '</div>' ,
            
            // '<div class="menu__tags" data-id="' + key + '">' + item.tags + '</div>' ,
         
            '<div class="menu__product-title" data-id="' + key + '">' + item.name +   '</div>' ,


            '<div class="menu__product-info" data-id="' + key + '">' + item.weight +  '<span data-label="gramm">г</span>' + '</div>' ,


            '<div class="menu__product-btn" data-id="' + key + '">' + item.price + '<span>₽</span>' + '</div>' ,
        );
        
         
    });

    $('.product__menu-item').html('');

    $.each(menu,function(key,item){

        $('.product__menu-item').append(
          
           
            '<div class="product__menu-images" data-id="' + key + '">' + item.img + '</div>' ,
            
            // '<div class="menu__tags" data-id="' + key + '">' + item.tags + '</div>' ,
            '<div class="product__close"><img src="./img/close-product.svg"alt="" /></div>',
            '<div class="product__menu-title" data-id="' + key + '">' + item.name +   '</div>' ,
            '<div class="product__menu-info"></div>',
            '<div class="product__menu-descr" data-id="' + key + '">' + item.descr +   '</div>' ,
            '<div class="product__menu-info-inner accordion-header"><div class="product__menu-info-img"><img src="./img/info.svg" alt="" /></div><div class="product__menu-info-text "data-label="about">О продукте</div></div>',
            '<div class="product__menu-box accordion-body"><table class="cart-product__info-table"><tr class="cart-product__info-table-row"><td class="cart-product__info-table-desc" data-label="weight">Вес</td> <td class="cart-product__info-table-price" data-id="' + key + '">' + item.weight +  '<span data-label="gramm">г</span></td></tr><tr class="cart-product__info-table-row"><td class="cart-product__info-table-desc" data-label="kcal_text">Энергетическая ценность</td>  <td class="cart-product__info-table-price" data-id="' + key + '">' + item.calories +  '<span data-label="kcal">ккал</span>' + '</td></tr> <tr class="cart-product__info-table-row"><td class="cart-product__info-table-desc" data-label="fats">Жиры</td>  <td class="cart-product__info-table-price" data-id="' + key + '">' + item.fats +  '<span data-label="gramm">г</span>' + '</td></tr> <tr class="cart-product__info-table-row"><td class="cart-product__info-table-desc" data-label="carbohydrates">Углеводы</td>  <td class="cart-product__info-table-price" data-id="' + key + '">' + item.carbohydrates +  '<span data-label="gramm">г</span>' + '</td></tr>  <tr class="cart-product__info-table-row"><td class="cart-product__info-table-desc" data-label="proteins">Белки</td>  <td class="cart-product__info-table-price" data-id="' + key + '">' + item.proteins +  '<span data-label="gramm">г</span>' + '</td></tr><table><div>',
        );
        
         
    });

   


    $(".menu__option").click(function(e) {
        e.preventDefault();
        $(".menu__option").removeClass('active');
        $(this).addClass('active');

        var name = $(this).text();
        $(".menu__lang").text(name);

        translate($(this).data('id'));
    });

    $('.btn_menu').click(function(){
        $('.page__home').hide();
        $('.page__menu').show();
    });
    $('.btn_tipping').click(function(){
        $('.page').hide();
        $('.page__tipping').show();
    });
    $('.back_menu').click(function(){
        $('.page').hide();
        $('.page__home').show();
    })
    $('.btn_lang').click(function(){
        $('.page__home').hide();
        $('.page__language').show();
    })
    $('.btn_basket').click(function(){
        $('.page').hide();
        $('.page__preorder').show();
    })
    $('.btn_preorder').click(function(){
        $('.page__preorder').hide();
        $('.page__thank').show();
    })

    
    
    $('.menu__option').click(function(){
        $('.page').hide();
        $('.page__home').show();
    })
    $('.thank__btn').click(function(){
        $('.page').hide();
        $('.page__basket').show();
    })
    


  
//Загрузка основной информации при открытии страницы

//фильтр

//клик по товару

//изменение кол-ва товаров

//Добавление в корзину

//Удаление из корзины

//Отправка запросов на сервер



//popup

$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    
});

//аккордион


var accordion = function () {
    var data = $(".accordion").attr("data-accordion");

    $(".accordion-header").on("click", function(){
        if (data === "close"){
            $(".accordion-body").slideUp();
            if ($(this).hasClass("active")){
                $(this).toggleClass("ative");
            }
            else{
                $(".accordion-header").removeClass("active");
                $(this).toggleClass("active");
            }
        }
        else{
            $(this).toggleClass("active");
        }
        $(this).next(".accordion-body").not(":animated").slideToggle();
    });
}

accordion();



});




