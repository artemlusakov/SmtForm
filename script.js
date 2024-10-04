// Получить модальные элементы
let modalContacts = document.querySelector(".modalContacts");
// Получить кнопки, которые открывают модальные окна
let btnContacts = document.getElementById("myBtnContacts");




// Анимация для модального окна контактов
btnContacts.onclick = function() {
  let modalContacts_content = modalContacts.querySelector('.modalContacts-content');
  modalContacts.style.display = 'block';
  modalContacts_content.style.left = '-100%';
  
  setTimeout(function() {
    modalContacts_content.style.left = '0';
  }, 50); // Небольшая задержка для плавности анимации
}

