document.addEventListener("DOMContentLoaded", () => {
    cargarEquiposPorLiga("4328"); // Cargar por defecto la Premier League (Fútbol)
    configurarControlesCarrusel();
});

// Función para cargar los equipos populares de una liga específica
async function cargarEquiposPorLiga(idLiga) {
    const url = `https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id=${idLiga}`;
    const contenedor = document.getElementById("carrusel-de-equipos");
    contenedor.innerHTML = "";

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const equipos = datos.teams;

        if (!equipos) {
            contenedor.innerHTML = "<p class='text-white'>No se encontraron equipos.</p>";
            return;
        }

        equipos.slice(0, 15).forEach(equipo => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "inline-block bg-gray-800 rounded-xl overflow-hidden shadow-md w-40 mx-2 flex-shrink-0";
            tarjeta.style.scrollSnapAlign = "start";
            tarjeta.style.scrollSnapStop = "always";

            tarjeta.innerHTML = `
                <img src="${equipo.strTeamBadge}" alt="${equipo.strTeam}" class="w-full h-48 object-contain bg-black" />
                <div class="p-3">
                    <h3 class="text-lg font-semibold mb-2 text-center">${equipo.strTeam}</h3>
                    <button class="bg-red-600 hover:bg-red-700 w-full py-2 rounded text-sm">Ver más</button>
                </div>
            `;

            const boton = tarjeta.querySelector("button");
            boton.addEventListener("click", () => {
                mostrarModalEquipo(equipo);
            });

            contenedor.appendChild(tarjeta);
        });
    } catch (error) {
        console.error("Error al cargar equipos:", error);
        contenedor.innerHTML = "<p class='text-red-400'>Error al cargar los equipos.</p>";
    }
}

// Cargar por ID de liga desde el select
document.getElementById("filterSport").addEventListener("change", async function () {
    const idLigaSeleccionada = this.value;
    if (idLigaSeleccionada) {
        await cargarEquiposPorLiga(idLigaSeleccionada);
    }
});

// Carrusel manual + automático
function configurarControlesCarrusel() {
    const carrusel = document.getElementById("carrusel-de-equipos");
    const btnIzq = document.getElementById("btnIzquierda");
    const btnDer = document.getElementById("btnDerecha");

    btnIzq.addEventListener("click", () => {
        carrusel.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnDer.addEventListener("click", () => {
        carrusel.scrollBy({ left: 300, behavior: "smooth" });
    });

    setInterval(() => {
        carrusel.scrollBy({ left: 300, behavior: "smooth" });
    }, 4000);
}

// Mostrar modal con info del equipo
function mostrarModalEquipo(equipo) {
    document.getElementById("modalImagen").src = equipo.strTeamBadge;
    document.getElementById("modalNombre").textContent = equipo.strTeam;
    document.getElementById("modalPais").textContent = equipo.strCountry;
    document.getElementById("modalDescripcion").textContent = equipo.strDescriptionES || equipo.strDescriptionEN || "Sin descripción.";
    document.getElementById("modalEquipo").classList.remove("hidden");
}

// Cerrar modal al dar clic en botón o fuera del contenido
document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modalEquipo").classList.add("hidden");
});

document.getElementById("modalEquipo").addEventListener("click", (e) => {
    if (e.target.id === "modalEquipo") {
        e.target.classList.add("hidden");
    }
});

