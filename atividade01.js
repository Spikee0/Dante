const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", () => e.preventDefault()
);
const seletorCor = document.getElementById("Cor");
seletorCor.addEventListener("input", (e) => {
   let CorNova = e.target.value;

   document.documentElement.style.setProperty("--primary-color",CorNova);
})