let modal = document.querySelector(".modal");
let btn = document.getElementById("myBtn");
let span = document.querySelector(".close");

// Когда пользователь нажимает на кнопку, открывает модальный
btn.onclick = function() {
    modal.style.display = "block";
  }
// Когда пользователь нажимает на <span> (x), закрывает модальные окна
span.onclick = function() {
    let modalContent = modal.querySelector('.modal-content');
    modal.style.display = "none";  
  }
// Когда пользователь щелкает в любом месте за пределами модальных окон, закрывает их
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    }
  }




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

