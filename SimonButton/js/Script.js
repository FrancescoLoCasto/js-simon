// Creation of const button

const button = document.getElementById('button');

// let create

let counter = 0;
let gamefinish = false


// Create addEventListener button

button.addEventListener("click", function () {

   if(!gamefinish) {
      if (counter < 10){
         counter++;
         button.innerHTML = `Play ${counter}`;
       }
   }

})


