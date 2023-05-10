let Toggle = document.querySelector('#btn')
let Light = document.querySelector('.light')
Toggle.onclick = function toggleBtn(){
   btn.classList.toggle("active")
   Light.classList.toggle("on")
}