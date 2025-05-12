document.addEventListener("DOMContentLoaded", () => {
  console.log("Documento cargado correctamente");

  const header = document.querySelector("header h1");
  header.addEventListener("click", () => {
    alert("¡Haz hecho clic en el título!");
  });
});
