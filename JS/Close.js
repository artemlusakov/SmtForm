let span = document.querySelector(".close");
let spanContacts = document.querySelector(".closeContacts");

span.onclick = function() {
    modal.style.display = "none";  
  }

spanContacts.onclick = function() {
    modalContacts.style.display = "none";  
  }
  
// Когда пользователь щелкает в любом месте за пределами модальных окон, закрывает их
window.onclick = function(event) {
    if (event.target == modal || event.target == modalContacts) {
      modal.style.display = "none";
      modalContacts.style.display = "none";
    }
  }