const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let counter = 0


start.addEventListener('click', function (){

   const timer = setInterval(() =>{
      counter++
      console.log(counter)
      tempo.innerHTML = counter
   },100)

   pause.addEventListener('click', function (){

   })


})