// Получить модальные элементы
let modalContacts = document.querySelector(".modalContacts");
// Получить кнопки, которые открывают модальные окна
let btnContacts = document.getElementById("myBtnContacts");
// Получить элемент <span>, который закрывает модальные окна
let spanContacts = document.querySelector(".closeContacts");


// Анимация для модального окна контактов
btnContacts.onclick = function() {
  let modalContent = modalContacts.querySelector('.modalContacts-content');
  modalContacts.style.display = 'block';
  modalContent.style.left = '-100%';
  
  setTimeout(function() {
    modalContent.style.left = '0';
  }, 50); // Небольшая задержка для плавности анимации
}

// Когда пользователь нажимает на <span> (x), закрывает модальные окна
spanContacts.onclick = function() {
  modalContacts.style.display = "none";  
}

// Когда пользователь щелкает в любом месте за пределами модальных окон, закрывает их
window.onclick = function(event) {
  if (event.target == modalContacts) {
    modalContacts.style.display = "none";
  }
}
