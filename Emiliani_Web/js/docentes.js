// Script que carga la información de docentes desde un JSON y la renderiza dinámicamente

// Esperar a que el DOM esté listo antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {
  fetch("/json/docentes.json")
    .then((response) => response.json())
    .then((docentes) => {
      const container = document.querySelector(".row.g-4");

      docentes.forEach((est) => {
        container.innerHTML += `
          <div class="col-md-4">
            <div class="card docente-card shadow-sm h-100 text-center">
              <img src="${est.imagen}" class="card-img-top" alt="${est.nombre}">
              <div class="card-body">
                <h5 class="card-title">${est.nombre}</h5>
                <p class="card-text">${est.descripcion}</p>
                <a href="${est.perfil}" class="btn btn-primary btn-sm">Ver perfil</a>
              </div>
            </div>
          </div>`;
      });
    })
    .catch((error) => console.error("Error cargando docentes:", error));
});
