// Script que carga la información de estudiantes desde un JSON y la renderiza dinámicamente

// Esperar a que el DOM esté listo antes de ejecutar
document.addEventListener("DOMContentLoaded", () => { // Asegurarse de que el DOM esté completamente cargado
  fetch("/json/estudiantes.json") // Cambia la ruta según la ubicación de tu archivo JSON
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((estudiantes) => { // Procesar el JSON
      const container = document.querySelector(".row.g-4"); // Seleccionar el contenedor donde se mostrarán los estudiantes

      estudiantes.forEach((est) => { // Iterar sobre cada estudiante
        // Crear un nuevo elemento HTML para cada estudiante
        container.innerHTML += `
          <div class="col-md-4">
            <div class="card estudiante-card shadow-sm h-100 text-center">
              <img src="${est.imagen}" class="card-img-top" alt="${est.nombre}">
              <div class="card-body">
                <h5 class="card-title">${est.nombre}</h5>
                <p class="card-text">${est.descripcion}</p>
                <a href="${est.perfil}" class="btn btn-primary btn-sm">Ver perfil</a>
              </div>
            </div>
          </div>`; // Agregar el nuevo elemento al contenedor
      }); // Cerrar el bloque forEach
    }) // Manejar errores en la carga del JSON
    .catch((error) => console.error("Error cargando estudiantes:", error)); // Manejar errores en la carga del JSON
});
