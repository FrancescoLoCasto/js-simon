let counter = 0;


const button = document.getElementById('simonButton');


simonButton.innerHTML = `#(${counter})`

simonButton.addEventListener('click', function(){

   if(counter < 10){
      counter++
   }

})