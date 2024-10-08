// Функция открытия модального окна
let modal = document.querySelector(".modal");
let btn = document.getElementById("myBtn");



// Когда пользователь нажимает на кнопку, открывает модальный 
btn.onclick = function() {
    modal.style.display = 'block';

    let modalOpasiti = document.querySelector(".modal-content")
    modalOpasiti.style.top = "-100%"
    setTimeout(function() {
        modalOpasiti.style.top = "0"
        modalOpasiti.style.position = "relative";
      
      }, 50)
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Валидация на количество 1го чек бокса
const checkboxs = document.querySelectorAll(".checkbox");

checkboxs.forEach(checkbox => {
  checkbox.addEventListener("click", function(event) {
  	checkboxs.forEach(ch => ch.checked = false);
    event.target.checked = true;
  })
});


// Валидация для телефона 
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___)-___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});


let autocomplete = [
   'Mосква',
    'Санкт-Петербург',
    'Нижний Новгород',
    'Екатеринбург',
    'Новосибирск',
    'Казань',
    'Омск',
    'Челябинск',
    'Красноярск',
    'Уфа',
    'Воронеж',
    'Саратов',
    'Тольятти',
    'Ижевск',
    'Барнаул',
    'Владивосток',
    'Астрахань',
    'Пенза',
    'Киров',
    'Курган',
    'Махачкала',
    'Рязань',
    'Липецк',
    'Томск',
    'Хабаровск',
    'Волгоград',
    'Калуга',
    'Оренбург',
    'Новороссийск',
    'Кемерово',
    'Чебоксары',
    'Иркутск',
    'Ульяновск',
    'Кострома',
    'Калининград',
    'Тверь',
    'Сочи',
    'Ярославль',
    'Вологда',
    'Крымск',
    'Ставрополь',
    'Краснодар',
    'Нижневартовск',
    'Пермь',
    'Тула',
    'Кирово-Чепецк',
    'Симферополь',
    'Серпухов',
    'Анапа',
    'Грозный',
    'Магадан',
    'Салехард',
    'Нарьян-Мар',
    'Анадырь',
    'Великий Устюг',
    'Архангельск',
    'Сыктывкар',
    'Петрозаводск',
    'Мурманск',
    'Владикавказ',
    'Минеральные Воды',
    'Нальчик',
    'Кисловодск',
    'Ессентуки',
    'Пятигорск',
    'Туапсе',
    'Тамбов',
    'Брянск',
    'Смоленск',
    'Орел',
    'Курск',
    'Белгород',
    'Липецк',
    'Тамбов',
    'Рязань',
    'Мордовия',
    'Пензенская область',
    'Саратов',
    'Ульяновск',
    'Нижний Новгород',
    'Киров',
    'Кострома',
    'Ярославль',
    'Владимир',
    'Иваново',
    'Калуга',
    'Тверь',
    'Московская область',
    'Ленинградская область',
    'Новгород',
    'Псков',
    'Вологда',
    'Архангельск',
    'Мурманск',
    'Карелия',
    'Коми',
    'Мордовия',
    'Удмуртия',
    'Башкирия',
    'Чувашия',
    'Татарстан',
    'Мари Эл',
    'Киров',
    'Нижегородская область',
    'Пензенская область',
    'Саратов',
    'Ульяновск',
    'Астрахань',
    'Волгоград',
    'Калмыкия',
    'Ставрополь',
    'Краснодар',
    'Адыгея',
    'Кабардино-Балкария',
    'Карачаево-Черкесия',
    'Ингушетия',
    'Дагестан',
    'Чечня',
    'Северный Кавказ',
    'Ростов-на-Дону',
    'Южный федеральный округ',
    'Центральный федеральный округ',
    'Сибирский федеральный округ',
    'Дальневосточный федеральный округ',
    'Уральский федеральный округ',
    'Северо-западный федеральный округ',
    'Приволжский федеральный округ',
    'Крымский федеральный округ',
    'Красноярский край',
    'Иркутская область',
    'Новосибирская область',
    'Омская область',
    'Томская область',
    'Алтайский край',
    'Кемеровская область',
    'Новокузнецк',
    'Красноярск',
    'Иркутск',
    'Новосибирск',
    'Омск',
    'Томск',
    'Барнаул',
    'Хабаровск',
    'Владивосток',
    'Екатеринбург',
    'Челябинск',
    'Самара',
    'Нижний Новгород',
    'Казань',
    'Пермь',
    'Волгоград',
    'Ростов-на-Дону',
    'Краснодар',
    'Санкт-Петербург',
    'Сочи',
    'Анапа',
    'Минеральные Воды',
    'Пятигорск',
    'Ессентуки',
    'Туапсе',
    'Новороссийск',
    'Тверь',
    'Киров',
    'Курск',
    'Белгород',
    'Липецк',
    'Тамбов',
    'Орск',
    'Пенза',
    'Саратов',
    'Ульяновск',
    'Кострома',
    'Иваново',
    'Калуга',
    'Владимир',
    'Смоленск',
    'Орел',
    'Мурманск',
    'Архангельск',
    'Сыктывкар',
    'Петрозаводск',
    'Магадан',
    'Салехард',
    'Нарьян-Мар',
    'Анадырь',
    'Великий Устюг',
    'Калининград',
    'Махачкала',
    'Грозный',
    'Симферополь',
    'Севастополь'


];

window.onload = function() {
  document.getElementById('Sity').onkeyup = keyUp;
}

function keyUp(e) {
  var e = e || window.event;
  switch (e.keyCode) {
    case 40:
      var selected = -1;
      var spans = document.getElementById('autocomplete').getElementsByTagName('span');
      for (i = 0; i <= spans.length; i++)
        if (i in spans && spans[i].className == 'selected') {
          spans[i].className = '';
          selected = i;
        }
      selected++;
      for (i = 0; i <= spans.length; i++)
        if (i in spans && i == selected) {
          spans[i].className = 'selected';
        }
      break;
    case 38:
      var spans = document.getElementById('autocomplete').getElementsByTagName('span');
      var selected = spans.length;
      for (i = 0; i <= spans.length; i++)
        if (i in spans && spans[i].className == 'selected') {
          spans[i].className = '';
          selected = i;
        }
      selected--;
      for (i = 0; i <= spans.length; i++)
        if (i in spans && i == selected) {
          spans[i].className = 'selected';
        }
      break;
    case 13:
      var spans = document.getElementById('autocomplete').getElementsByTagName('span');
      for (i = 0; i <= spans.length; i++)
        if (i in spans && spans[i].className == 'selected') {
          document.getElementById('Sity').value = spans[i].innerHTML;
          document.getElementById('autocomplete').innerHTML = '';
        }
      break;
    default:
      var div = document.getElementById('autocomplete');
      var value = document.getElementById('Sity').value;
      div.innerHTML = '';
      if (value.length > 0) {
        autocomplete.forEach(function(elem, index) {
          var regex = new RegExp("^" + value, "i");
          //if(elem.includes(value)) {
          if (elem.match(regex)) {
            var click_func = "choice_city('" + autocomplete[index] + "')"; 
            div.innerHTML += '<span onclick="' + click_func + '">' + autocomplete[index] + '</span><br />';
          }
        });
      }
  }
}
var choice_city = function(city_name){
   document.getElementById('Sity').value = city_name;
   document.getElementById('autocomplete').innerHTML = '';
};

// Условие отображения активности кнопки 
document.addEventListener('DOMContentLoaded', function() {
    const requiredFields = document.querySelectorAll('.required-field');
    const submitButton = document.querySelector('.SmtFormButton');

    function allRequiredFieldsFilled() {
        return Array.from(requiredFields).every(field => field.value.trim() !== '');
    }

    function toggleSubmitButtonClasses() {
        if (allRequiredFieldsFilled()) {
            submitButton.classList.remove('Disabl');
            submitButton.classList.add('Activ');
        } else {
            submitButton.classList.remove('Activ');
            submitButton.classList.add('Disabl');
        }
    }

    // Инициализация состояния кнопки
    toggleSubmitButtonClasses();

    // Добавляем слушатели событий для всех полей
    requiredFields.forEach(field => {
        field.addEventListener('input', toggleSubmitButtonClasses);
        field.addEventListener('change', toggleSubmitButtonClasses);
    });
});
