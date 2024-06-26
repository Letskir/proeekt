
function createSlider() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;
    function showSlide(n) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(currentSlide);
}

createSlider();


//кнопка сложность
let textContainer = document.getElementById("textContainer");
    
    // Получаем ссылку на элемент с классом "navі"
    let navі_1 = document.querySelector(".navі1");
    
    // Добавляем обработчик события "click" к элементу с классом "navі"
    navі_1.addEventListener("click", function() {
        // Изменяем содержимое элемента с id="textContainer"
        textContainer.innerHTML = `
        Сложность отвечает за то, насколько испытывающим будет игровой процесс. В Террарии присутствуют отдельные сложности для персонажей и миров. У миров есть 4 сложности: путешествие, нормальная, эксперт и мастер. Путешествие это сложность на которой можно самому всё настроить, а эксперт и мастер значительно усложняют игру, но взамен из врагов выпадает больше вещей, и шанс выпадения редких вещей увеличен, а также из персонажа выпадают монеты. Сложности игрока это путешествие(для миров путешествия), нормальная, средняя(с игрока выпадают вещи при смерти) и сложный(после смерти игрок не может взаимодействовать с миром и только наблюдать
        `;
    });



    //кнопка структуры

    
// Получаем ссылку на элемент с классом "navі"
let navі_2 = document.querySelector(".navі2");

navі_2.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
    textContainer.innerHTML = `
    Структуры - это различные постройки  которые можно встретить во время исследования мира. Зачастую в структурах можно встретить полезные вещи такие как: зелья, монеты, некоторые аксессуары и оружия, и даже предметы призыва некоторых боссов и различные материалы
    `;
});


//кнопка оружие

    

let navі_3 = document.querySelector(".navі3");

navі_3.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
    textContainer.innerHTML = `
    Оружие — это основной предмет, предназначенные для борьбы с противниками, боссами, живностью, а также с другими игроками во время PvP-режима. Некоторые виды оружия могут быть изготовлены на верстаке или наковальнях простого/сложного режима, в то время, как другие могут быть найдены в сундуках, выпасть с противников или продаваться у жителей. В Terraria широкий выбор видов оружия и классов, каждый из которых подходит для определённого стиля игры или может использоваться для определённых целей.
    Многие инструменты также могут быть использованы в качестве оружия, не смотря на то, что это их не прямое назначение. В более широком смысле, ловушки, самозащищающиеся жители  и даже лава могут использоваться как оружие.
    `;
});



//кнопка броня

    
// Получаем ссылку на элемент с классом "navі"
let navі_4 = document.querySelector(".navі4");


navі_4.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
    textContainer.style.fontSize='15px'
    textContainer.innerHTML = `
    Броня - это комплект защищающих предметов, которые понижают урон, получаемый вами от Противников и большинства других источников урона. Части брони экипируются перенесением их в слот брони Инвентаря Игрока. Также броня может быть поставлена в слоты стиля, чтобы изменить внешний вид игрока без затрагивания его характеристик. Они могут быть получены с помощью комбинирования материалов на рабочих местах, торговли у НИПов или выпадения с некоторых противников.

Каждая часть брони имеет свою статистику защиты, которая (округлив) уменьшает урон на половину (или 3/4) от своего значения. Например, полный комплект Медной брони даёт в общем 6 единиц защиты и снижает урон на 3 (или на 5). Серебряная броня даёт 13 единиц защиты и снижает урон на 7 единиц (или 10) после округления. Урон от атаки не может быть понижен до нуля; все атаки всё равно будут наносить минимум 1 единицу урона (или 2 для Критического удара), несмотря на качество брони игрока.

Также ко всей защите, что дают отдельные части брони, большинство типов брони дают уникальные 'Бонусы полного комплекта', но только когда все 3 части одинаковой брони надеты одновременно. Как основа, все Руды обычного режима (Медная, Оловянная, Железная, Свинцовая, Серебряная, Вольфрамовая, Золотая, Платиновая броня) дают дополнительную защиту. Более продвинутая и уникальная броня даёт другие определённые бонусы комплекта (например, Грибнитовая броня даёт невидимость, если не двигаться). Всего существует 34 уникальных типа брони в Обычном режиме и 33 в Сложном режиме. Также есть 7 роб и 2 шляпы мага, которые дают дополнительные эффекты. Также 7 других частей брони
    `;
});



//кнопка аксессуары

    
// Получаем ссылку на элемент с классом "navі"
let navі_5 = document.querySelector(".navі5");

navі_5.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    Аксессуары — это надеваемые предметы, которые могут давать прибавку к характеристикам и/или специальные способности. Для функционирования аксессуары должны быть помещены в специальную ячейку для аксессуаров за исключением некоторых информационных аксессуаров, которые работают просто находясь в инвентаре у игрока.Игрок не может экипировать повторяющиеся аксессуары, но в мастерской инженера можно объединить несколько аксессуаров в новый со сложением их эффектов. Например, сапоги Гермеса (или любой другой похожий аксессуар) и реактивные сапоги можно объединить в призрачные сапоги, дающие полёт и увеличенную скорость бега. Если бросить такой аксессуар в мерцание, то он разберётся на составные компоненты.Каждая ячейка для аксессуаров имеет соответствующую ячейку для украшений (а также ячейку для красителей), которая позволяет игроку надеть в два раза больше аксессуаров в целях украшения или для хранения
    `;
});



//кнопка зелья
    
// Получаем ссылку на элемент с классом "navі"
let navі_6 = document.querySelector(".navі6");

navі_6.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    Зелья — это расходуемые предметы для мгновенного или постепенного восстановления здоровья и/или маны, или накладывающие временные бафы или дебафы. Зелья часто можно отыскать в естественных сундуках и горшках, выбить с противников, приобрести у НИПов или создать. Большинство зелий можно создать на размещённой банке или алхимическом столе, но флаконы — только на наполнителе.
    Действие бафа можно отменить в любое время по нажатию правой кнопки по иконке бафа . Все бафы зелий (в том числе бафы от еды, с исключением в виде флаконов) теряются при смерти.
    `;
});



//кнопка Нипы
    
// Получаем ссылку на элемент с классом "navі"
let navі_7 = document.querySelector(".navі7");


navі_7.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    НИПы = "Неигровые персонажи или сокращённо НИПы — это персонажи, с которыми игроки могут взаимодействовать, но за которых не могут играть. Большинство из них — продавцы и скупщики, торгующие за монеты, за исключением гида, предоставляющего игрокам информацию, старика, пока он не станет портным, а также рыбака, дающего различные рыболовные задания. Медсестра ничего не продаёт, но предоставляет услуги лечения. Игрок может взаимодействовать с любым НИПом, нажав по нему.
    `;
});




//кнопка биомы
    
// Получаем ссылку на элемент с классом "navі"
let navі_8 = document.querySelector(".navі8");

navі_8.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    Биомы - это различные типы ландшафтов, расположенные в игре. Наиболее распространенные: леса и пустыни, находящиеся на поверхности. Слева или справа относительно стартовой точки располагается Порча. На каждом из концов карты лежит Океан. Под землёй последовательно располагаются подземелья, Пещеры и Преисподняя. Высоко в небе "летают" Парящие острова.
    Каждый тип окружения имеет свои особенности.
    `;
});




//кнопка босы
    

let navі_9 = document.querySelector(".navі9");

navі_9.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    Боссы — это агрессивные, живучие противники, которые представляют собой серьёзную проблему для игроков. Победа над боссом обычно помогает продвинуться в игре тем или иным способом, например, даёт игроку новый материал для создания кирки более высокого уровня. У каждого из них есть свой способ призыва. Например, у большинства боссов есть связанные с ними предметы для призыва, с помощью которых их можно вызвать вручную при определённых условиях, а есть и такие, которые появляются после того, как игрок взаимодействует с окружением определённым образом. Боссы событий появляются только во время соответствующих событий и уходят, когда событие заканчивается. Существуют также мини-боссы, которые появляются только во время особых событий и имеют такую же сложность, как и обычные боссы. Их здоровье имеет огромный диапазон: в классическом режиме оно варьируется от 1000 до 145 000 единиц.
Большинство боссов и мини-боссов могут проходить сквозь блоки всех типов, за исключением Короля слизней, Королева слизней и «Летучий голландец
    `;
});


//кнопка классы
    

let navі_10 = document.querySelector(".navі10");

navі_10.addEventListener("click", function() {
    let textContainer = document.getElementById("textContainer");
   
    textContainer.innerHTML = `
    Классы персонажа — условные типы персонажа в игре, определяющие его умения и направление дальнейшего прохождения, для которых характерно то или иное снаряжение. Также можно заметить, что выбор класса — это всего лишь условное объяснение, так как в игре вам не предстоит выбирать его буквально. Но если Вы всё-таки выберете какой-нибудь класс, то вам будет легче в развитии своего персонажа.
    В игре имеются всего 4 основных класса. Дополнительно: существуют предметы для мультикласса, как например сет кристальной брони ассасина, увеличивающий весь урон, а не конкретный его вид и дающий неплохую броню.
    `;
});
