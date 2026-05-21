const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", () => e.preventDefault()
);
const seletorCor = document.getElementById("Cor");
seletorCor.addEventListener("input", (e) => {
   let CorNova = e.target.value;

   document.documentElement.style.setProperty("--primary-color",CorNova);
})

document.addEventListener("DOMContentLoaded", () => {

   const rootStyles =
       window
           .getComputedStyle
           (document.documentElement);

   const primaryColor =
       rootStyles
           .getPropertyValue
           ("--primary-color");

   seletorCor.value =
       primaryColor;
})