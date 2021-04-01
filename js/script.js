$("#send").on("click",function(){
	var name=$("#name").val().trim();
	var phone=$("#phone").val().trim();
	var email=$("#email").val().trim();
	
	if (email==""){
		$("#errorMessage").text("Введите email");
		return false;
	}else if(name==""){
		$("#errorMessage").text("Введите имя");
		return false;
	}else if(phone==""){
		$("#errorMessage").text("Введите телефон");
		return false;
	}
	
	$("#errorMessage").text("");
	//alert(name);
	$.ajax({
		url: 'ajax/mail.php',
		type:'POST',
		cache:false,
		data:{'email':email,'name':name,'phone':phone},
		dataType:"html",
		beforeSend: function(){
			$("#send").prop("disabled",true);
		},
		success:function(data){
			alert(data);
			$("#send").prop("disabled",false);
		}
	})
	
});

$(function() {
    $.scrollUp({
      scrollName: 'scrollUp', // ID элемента
      scrollDistance: 300, // Расстояние от начала страницы до показа кнопки (в пикселях)
      scrollFrom: 'top', // 'top' или 'bottom' (лучше задать стилями)
      scrollSpeed: 300, // Скорость прокрутки (в миллисекундах)
      easingType: 'linear', // Анимация плавности (все анимации на http://easings.net/)
      animation: 'fade', // Анимация появления Fade, slide или none
      animationSpeed: 200, // Скорость анимации появления кнопки (в миллисекундах)
      scrollTrigger: false, // Свой триггер (html кнопка), к примеру '<button>Кнопка вверх</button>'
      scrollTarget: false, // До куда скролим (может быть класс или id), по умолчанию самый верх страницы
      //scrollText: 'Вверх', // Текст в кнопке
      scrollTitle: false, // Задаем title кнопки
      scrollImg: true, // Если в качестве кнопки используем изображение
      activeOverlay: false, // Цвет "точки" откуда будет появляться кнопка, по умолчанию '#00FFFF' (для визуальности)
      zIndex: 2147483647 // z-index для точки срабатывания
    });
  });


$('.carousel').carousel({
		interval: 6000,
		ride:'carousel'
	})