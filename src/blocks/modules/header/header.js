import $ from "jquery";
import "slick-carousel";

const regions = [
  {
    city: "Александрийский район",
    link: "https://www.facebook.com/groups/920244915138042/",
  },
  {
    city: "Алчевский район",
    link: "https://www.facebook.com/groups/341910366847729/",
  },
  {
    city: "Ахтырский район",
    link: "https://www.facebook.com/groups/382805072698821/",
  },
  {
    city: "Бахмутский район",
    link: "https://www.facebook.com/groups/332020717849895/",
  },
  {
    city: "Бахчисарайский район",
    link: "https://www.facebook.com/groups/3183603158419810",
  },
  {
    city: "Баштанский район",
    link: "https://www.facebook.com/groups/2600548596864108/",
  },
  {
    city: "Белгород - Днестровский район",
    link: "https://www.facebook.com/groups/225708075340566/",
  },
  {
    city: "Белогорский район",
    link: "https://www.facebook.com/groups/702664906949500/",
  },
  {
    city: "Белоцерковский район",
    link: "https://www.facebook.com/groups/327136978418702/",
  },
  {
    city: "Бердичевский район",
    link: "https://www.facebook.com/groups/353606326035106/",
  },
  {
    city: "Бердянский район",
    link: "https://www.facebook.com/groups/753577758790599/",
  },
  {
    city: "Береговский район",
    link: "https://www.facebook.com/groups/624847621783190/",
  },
  {
    city: "Березовский район",
    link: "https://www.facebook.com/groups/2703627319908036/",
  },
  {
    city: "Бериславский район",
    link: "https://www.facebook.com/groups/603413680604096/",
  },
  {
    city: "Богодуховский район",
    link: "https://www.facebook.com/groups/324520975261407/",
  },
  {
    city: "Болградский район",
    link: "https://www.facebook.com/groups/241646470166005/",
  },
  {
    city: "Бориспольский район",
    link: "https://www.facebook.com/groups/1261505157523351/",
  },
  {
    city: "Броварской район",
    link: "https://www.facebook.com/groups/923935854753644/",
  },
  {
    city: "Бучанский район",
    link: "https://www.facebook.com/groups/1205050483192185/",
  },
  {
    city: "Варасский район",
    link: "https://www.facebook.com/groups/292037522022035/",
  },
  {
    city: "Васильевский район",
    link: "https://www.facebook.com/groups/299564144455825/",
  },
  {
    city: "Верховинский район",
    link: "https://www.facebook.com/groups/2633255803558629/",
  },
  {
    city: "Вижницкий район",
    link: "https://www.facebook.com/groups/597648437454907/",
  },
  {
    city: "Винницкий район",
    link: "https://www.facebook.com/groups/3502582446441567",
  },
  {
    city: "Владимир - Волынский район",
    link: "https://www.facebook.com/groups/574167539942213/",
  },
  {
    city: "Вознесенский район",
    link: "https://www.facebook.com/groups/338767393957965/",
  },
  {
    city: "Волновахский район",
    link: "https://www.facebook.com/groups/593258651362387/",
  },
  {
    city: "Вышгородский район",
    link: "https://www.facebook.com/groups/611422349786782/",
  },
  {
    city: "Гайсинский район",
    link: "https://www.facebook.com/groups/292418802088439/",
  },
  {
    city: "Генический район",
    link: "https://www.facebook.com/groups/588069178736316/",
  },
  {
    city: "Голованевский район",
    link: "https://www.facebook.com/groups/348649659786421/",
  },
  {
    city: "Горловский район",
    link: "https://www.facebook.com/groups/303308947751940/",
  },
  {
    city: "Джанкойский район",
    link: "https://www.facebook.com/groups/303230680923282/",
  },
  {
    city: "Днепровский район",
    link: "https://www.facebook.com/groups/603496473690145/",
  },
  {
    city: "Днестровский район",
    link: "https://www.facebook.com/groups/1240773426272495/",
  },
  {
    city: "Должанский район",
    link: "https://www.facebook.com/groups/1096332847463057/",
  },
  {
    city: "Донецкий район",
    link: "https://www.facebook.com/groups/2739697272930612/",
  },
  {
    city: "Дрогобычский район",
    link: "https://www.facebook.com/groups/1184488651929277/",
  },
  {
    city: "Дубенский район",
    link: "https://www.facebook.com/groups/2823974767849293/",
  },
  {
    city: "Евпаторийский район",
    link: "https://www.facebook.com/groups/611312322902963/",
  },
  {
    city: "Житомирский район",
    link: "https://www.facebook.com/groups/309744123505820/",
  },
  {
    city: "Жмеринский район",
    link: "https://www.facebook.com/groups/333834437653454/",
  },
  {
    city: "Запорожский район",
    link: "https://www.facebook.com/groups/398140917813772/",
  },
  {
    city: "Звенигородский район",
    link: "https://www.facebook.com/groups/294535271961767/",
  },
  {
    city: "Золотоношский район",
    link: "https://www.facebook.com/groups/632232284357945/",
  },
  {
    city: "Золочевский район",
    link: "https://www.facebook.com/groups/758299688331510/",
  },
  {
    city: "Ивано - Франковский район",
    link: "https://www.facebook.com/groups/289324755667429/",
  },
  {
    city: "Измаильский район",
    link: "https://www.facebook.com/groups/1170340346661604/",
  },
  {
    city: "Изюмский район",
    link: "https://www.facebook.com/groups/702697713644288/",
  },
  {
    city: "Калушский район",
    link: "https://www.facebook.com/groups/3148341608553917",
  },
  {
    city: "Кальмиусский район",
    link: "https://www.facebook.com/groups/797007144174528/",
  },
  {
    city: "Каменец - Подольский район",
    link: "https://www.facebook.com/groups/291882138796870/",
  },
  {
    city: "Каменский район",
    link: "https://www.facebook.com/groups/745021092930446/",
  },
  {
    city: "Камень - Каширский район",
    link: "https://www.facebook.com/groups/2360534417586852/",
  },
  {
    city: "Каховский район",
    link: "https://www.facebook.com/groups/1205099899850097/",
  },
  {
    city: "Керченский район",
    link: "https://www.facebook.com/groups/329883094853212/",
  },
  {
    city: "Киев - Голосееевский район",
    link: "https://www.facebook.com/groups/2352033378435637/",
  },
  {
    city: "Киев - Дарницкий район",
    link: "https://www.facebook.com/groups/721715682017414/",
  },
  {
    city: "Киев - Днепровский район",
    link: "https://www.facebook.com/groups/2736389859938597/",
  },
  {
    city: "Киев - Оболонский район",
    link: "https://www.facebook.com/groups/326450678720450/",
  },
  {
    city: "Киев - Печерский район",
    link: "https://www.facebook.com/groups/625532474747954",
  },
  {
    city: "Киев - Подольский район",
    link: "https://www.facebook.com/groups/594360317932724/",
  },
  {
    city: "Киев - Святошинский район",
    link: "https://www.facebook.com/groups/630835974206450",
  },
  {
    city: "Киев - Соломенский район",
    link: "https://www.facebook.com/groups/1274307896244266",
  },
  {
    city: "Киев - Шевченковский район",
    link: "https://www.facebook.com/groups/238915373844160",
  },
  {
    city: "Киев - Деснянсикй район",
    link: "https://www.facebook.com/groups/574629233233958/",
  },
  {
    city: "Ковельский район",
    link: "https://www.facebook.com/groups/637983026816741/",
  },
  {
    city: "Коломыйский район",
    link: "https://www.facebook.com/groups/2776831289263651/",
  },
  {
    city: "Конотопский район",
    link: "https://www.facebook.com/groups/244172099888504/",
  },
  {
    city: "Коростенский район",
    link: "https://www.facebook.com/groups/684707282114300/",
  },
  {
    city: "Корюковский район",
    link: "https://www.facebook.com/groups/296901504918767/",
  },
  {
    city: "Косовский район",
    link: "https://www.facebook.com/groups/3510865648947870",
  },
  {
    city: "Краматорский район",
    link: "https://www.facebook.com/groups/341124377284313/",
  },
  {
    city: "Красноградский район",
    link: "https://www.facebook.com/groups/335015707681400",
  },
  {
    city: "Красногвардейский район",
    link: "https://www.facebook.com/groups/611639829726824",
  },
  {
    city: "Красноперекопский",
    link: "https://www.facebook.com/groups/605267950135099",
  },
  {
    city: "Кременецкий район",
    link: "https://www.facebook.com/groups/1019002138529265/",
  },
  {
    city: "Кременчугский район",
    link: "https://www.facebook.com/groups/2489556234602662/",
  },
  {
    city: "Криворожский район",
    link: "https://www.facebook.com/groups/2033175736814228/",
  },
  {
    city: "Кропивницкий район",
    link: "https://www.facebook.com/groups/2738161646459229/",
  },
  {
    city: "Купянский район",
    link: "https://www.facebook.com/groups/1729349090545889/",
  },
  {
    city: "Лозовский район",
    link: "https://www.facebook.com/groups/1856119791196507/",
  },
  {
    city: "Лубенский район",
    link: "https://www.facebook.com/groups/1185615318467858/",
  },
  {
    city: "Луганский район",
    link: "https://www.facebook.com/groups/341950070273644/",
  },
  {
    city: "Луцкий район",
    link: "https://www.facebook.com/groups/754039482077798/",
  },
  {
    city: "Львовский район",
    link: "https://www.facebook.com/groups/308640507044592/",
  },
  {
    city: "Мариупольский район",
    link: "https://www.facebook.com/groups/821021148434487/",
  },
  {
    city: "Мелитопольский район",
    link: "https://www.facebook.com/groups/218163022853884/",
  },
  {
    city: "Миргородский район",
    link: "https://www.facebook.com/groups/229301351588792/",
  },
  {
    city: "Могилев - Подольский район",
    link: "https://www.facebook.com/groups/293900001832864/",
  },
  {
    city: "Мукачевский район",
    link: "https://www.facebook.com/groups/312947846732448/",
  },
  {
    city: "Надворнянский район",
    link: "https://www.facebook.com/groups/943809472697139/",
  },
  {
    city: "Нежинский район",
    link: "https://www.facebook.com/groups/315704616285582/",
  },
  {
    city: "Николаевский район",
    link: "https://www.facebook.com/groups/298879358028125/",
  },
  {
    city: "Никопольский район",
    link: "https://www.facebook.com/groups/1868754563263415/",
  },
  {
    city: "Новгород - Северский район",
    link: "https://www.facebook.com/groups/753502495482141/",
  },
  {
    city: "Новоград - Волынский район",
    link: "https://www.facebook.com/groups/395565778093308/",
  },
  {
    city: "Новомосковский район",
    link: "https://www.facebook.com/groups/345084733166516/",
  },
  {
    city: "Новоукраинский район",
    link: "https://www.facebook.com/groups/650395855580987/",
  },
  {
    city: "Обуховский район",
    link: "https://www.facebook.com/groups/634700307154215/",
  },
  {
    city: "Одесский район",
    link: "https://www.facebook.com/groups/742591436575388/",
  },
  {
    city: "Павлоградский район",
    link: "https://www.facebook.com/groups/717768872104174/",
  },
  {
    city: "Первомайский район",
    link: "https://www.facebook.com/groups/294729138524192/",
  },
  {
    city: "Перекопский район",
    link: "https://www.facebook.com/groups/298671374692825/",
  },
  {
    city: "Подольский район",
    link: "https://www.facebook.com/groups/2002515253212046",
  },
  {
    city: "Покровский район",
    link: "https://www.facebook.com/groups/1237975069893934/",
  },
  {
    city: "Пологовский район",
    link: "https://www.facebook.com/groups/603783020321682/",
  },
  {
    city: "Полтавский район",
    link: "https://www.facebook.com/groups/1799968916809615/",
  },
  {
    city: "Прилуцкий район",
    link: "https://www.facebook.com/groups/293153525120831/",
  },
  {
    city: "Раздельнянский район",
    link: "https://www.facebook.com/groups/755942408495539/",
  },
  {
    city: "Раховский район",
    link: "https://www.facebook.com/groups/572734616749823/",
  },
  {
    city: "Ровенский район",
    link: "https://www.facebook.com/groups/946459222485414/",
  },
  {
    city: "Ровеньковский район",
    link: "https://www.facebook.com/groups/582506752634374/",
  },
  {
    city: "Роменский район",
    link: "https://www.facebook.com/groups/3331918733537399",
  },
  {
    city: "Самборский район",
    link: "https://www.facebook.com/groups/598581974184038/",
  },
  {
    city: "Сарненский район",
    link: "https://www.facebook.com/groups/297232461607994/",
  },
  {
    city: "Сватовский район",
    link: "https://www.facebook.com/groups/220532555931440/",
  },
  {
    city: "Северодонецкий район",
    link: "https://www.facebook.com/groups/1197537347246639/",
  },
  {
    city: "Симферопольский район",
    link: "https://www.facebook.com/groups/298360688077540/",
  },
  {
    city: "Синельниковский район",
    link: "https://www.facebook.com/groups/580573329488848/",
  },
  {
    city: "Скадовский район",
    link: "https://www.facebook.com/groups/3199413093480440",
  },
  {
    city: "Старобельский район",
    link: "https://www.facebook.com/groups/1076035082792581/",
  },
  {
    city: "Стрыйский район",
    link: "https://www.facebook.com/groups/305040184173706/",
  },
  {
    city: "Сумский район",
    link: "https://www.facebook.com/groups/748441119035532/",
  },
  {
    city: "Тернопольский район",
    link: "https://www.facebook.com/groups/293994501936749/",
  },
  {
    city: "Тульчинский район",
    link: "https://www.facebook.com/groups/298517311257970/",
  },
  {
    city: "Тячевский район",
    link: "https://www.facebook.com/groups/302169627560783/",
  },
  {
    city: "Ужгородский район",
    link: "https://www.facebook.com/groups/783782519033259/",
  },
  {
    city: "Уманский район",
    link: "https://www.facebook.com/groups/382675356037413/",
  },
  {
    city: "Фастовский район",
    link: "https://www.facebook.com/groups/943216236083736/",
  },
  {
    city: "Феодосийский район",
    link: "https://www.facebook.com/groups/782721645800364/",
  },
  {
    city: "Харьковский район",
    link: "https://www.facebook.com/groups/593433751230652/",
  },
  {
    city: "Херсонский район",
    link: "https://www.facebook.com/groups/573753389938338/",
  },
  {
    city: "Хмельницкий район(Хмельник)",
    link: "https://www.facebook.com/groups/624670304839109",
  },
  {
    city: "Хмельницкий район",
    link: "https://www.facebook.com/groups/710358249511386/",
  },
  {
    city: "Хустский район",
    link: "https://www.facebook.com/groups/733403180568932/",
  },
  {
    city: "Червоноградский район",
    link: "https://www.facebook.com/groups/754083572079786/",
  },
  {
    city: "Черкасский район",
    link: "https://www.facebook.com/groups/2962146947241573/",
  },
  {
    city: "Черниговский район",
    link: "https://www.facebook.com/groups/760134424739525/",
  },
  {
    city: "Черновицкий район",
    link: "https://www.facebook.com/groups/751660078997649/",
  },
  {
    city: "Чертковский район",
    link: "https://www.facebook.com/groups/736630770465970/",
  },
  {
    city: "Чугуевский район",
    link: "https://www.facebook.com/groups/225406212042993/",
  },
  {
    city: "Шепетовский район",
    link: "https://www.facebook.com/groups/214404746643152/",
  },
  {
    city: "Шосткинский район",
    link: "https://www.facebook.com/groups/3012467118851563/",
  },
  {
    city: "Яворовский район",
    link: "https://www.facebook.com/groups/648917825752916/",
  },
  {
    city: "Ялтинский район",
    link: "https://www.facebook.com/groups/395565778093308/",
  },
];

$(".dropdown__value").click(function () {
  $(this).siblings(".dropdown__list").slideToggle();
});

$(document).on("click", ".dropdown__list li", function () {
  let val = $(this).text();
  $(this).parent().siblings(".dropdown__value").text(val);
  $(".region__btn").attr("href", $(this).data("link"));
  console.log(val);
  $(this).parent().slideToggle();
});

function createRegion(region) {
  return `<li data-link='${region.link}'>${region.city}</li>`;
}

$(document).ready(function () {
  $(".auth-user__head").on("click", function () {
    $(this).toggleClass("active");
    $(".auth-user__dropdown").slideToggle();
  });

  // Dropdwon regions
  for (let region of regions) {
    $(".dropdown-regions").append(createRegion(region));
  }

  // Slick
  $(".js-jumb-carousel").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: $(".jumb__carousel-next"),
    prevArrow: $(".jumb__carousel-prev"),
  });

  $(".gallery__main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".gallery__second",
  });
  $(".gallery__second").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".gallery__main",
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    nextArrow: $(".gallery__next"),
    prevArrow: $(".gallery__prev"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
        },
      },
    ],
  });

  // Modals
  $(".modal-trigger").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("modal-target");
    $(".modal").hasClass("modal_active")
      ? $(".modal__body").slideUp()
      : $(".modal").addClass("modal_active");
    $(target).delay(500).slideDown();
  });

  $(".modal__close").click(function (e) {
    e.preventDefault();
    modalClose();
  });

  $(".modal").click(function (e) {
    if ($(e.target).hasClass("modal_active")) {
      modalClose();
    }
  });

  function modalClose() {
    $(".modal").hasClass("modal_active")
      ? $(".modal").removeClass("modal_active")
      : $(".modal").addClass("modal_active");
    $(".modal__body").slideUp();
  }
});
