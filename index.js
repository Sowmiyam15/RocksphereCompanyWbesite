const  menu= document.querySelector('.menu');
const menuList=document.querySelector('.nav ul')
 menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu');
 })

 document.getElementById('signup-btn').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Replace with your sign-up page URL
});





