/*  
Project Name: Beautiful Animated Navigation
Description: Beautiful Animated Navigation is made for those who want to save time instead of making it. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const body = document.body;
const toggleBtn = document.getElementById('toggleBtn')
const nav = document.getElementById('nav')
const switchBtn = document.querySelector('.slider')
const checkBox = document.querySelector('.checkbox')


toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('close')
})

switchBtn.addEventListener('click', () => {
    if (checkBox.checked == true){
        body.classList.remove('dark-mode')
    } else {
        
        body.classList.add('dark-mode')
    }
})

function onLoadCheck () {
    if (checkBox.checked == true){
        body.classList.add('dark-mode')
       
    } else {
         body.classList.remove('dark-mode')
    }
}
onLoadCheck()