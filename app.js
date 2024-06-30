const hamb = document.querySelector("#hamb"); 
const popup = document.querySelector("#popup"); 
const menu = document.querySelector("#menu").cloneNode(1); 
const body = document.body; 
 
hamb.addEventListener("click", hambHandler); 
 
function hambHandler(e) { 
  e.preventDefault(); 
  popup.classList.toggle("open"); 
  hamb.classList.toggle("active"); 
  body.classList.toggle("noscroll"); 
  renderPopup(); 
} 
 
function renderPopup() { 
  popup.appendChild(menu); 
} 
 
// Код для закрытия меню при нажатии на ссылку 
 
const links = Array.from(menu.children); 
 
links.forEach((link) => { 
  link.addEventListener("click", closeOnClick); 
}); 
 
function closeOnClick() { 
  popup.classList.remove("open"); 
  hamb.classList.remove("active"); 
  body.classList.remove("noscroll"); 
} 
 
 
// nav  end 
 
 
  
window.onscroll = () =>{  
    navbar.classList.remove('active');  
    cartItem.classList.remove('active');  
    searchForm.classList.remove('active');  
}

// Кнопка на верх
$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            right: '-120px',
            bottom: '-120px'
        });
        } else {
        $('.upbtn').css({
            right: '-220px',
            bottom: '-220px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
// Нов меню
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});