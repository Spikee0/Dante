const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", () => e.preventDefault()
);
const seletorCor = document.getElementById("Cor");
seletorCor.addEventListener("input", (e) => {
   let CorNova = e.target.value;

    localStorage.setItem("primaryColor", CorNova)

   document.documentElement.style.setProperty("--primary-color",CorNova);
})

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("primaryColor")) {
        seletorCor.value = localStorage.getItem("primaryColor");
        document.documentElement.style.setProperty("--primary-color",seletorCor.value);
    }else{
   const rootStyles =
       window
           .getComputedStyle
           (document.documentElement);

   const primaryColor =
       rootStyles
           .getPropertyValue
           ("--primary-color").trim();

   seletorCor.value =
       primaryColor;
   }
})
