const API_LEAGUES = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
const carrusel = document.getElementById("carrusel-de-equipos");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");
const inputBuscar = document.getElementById("searchInput");
const botonBuscar = document.getElementById("btn-Buscar");
const contenedorCarrusel = document.getElementById("carrusel-de-equipos");


const logosLigas = {
    "English Premier League": "https://www.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png",
    "Spanish La Liga": "https://www.thesportsdb.com/images/media/league/badge/ja4it51687628717.png",
    "Italian Serie A": "https://www.thesportsdb.com/images/media/league/badge/67q3q21679951383.png",
    "English League Championship": "https://www.thesportsdb.com/images/media/league/badge/ty5a681688770169.png",
    "Scottish Premier League": "https://www.thesportsdb.com/images/media/league/badge/72d3zc1688333496.png",
    "German Bundesliga": "https://www.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png",
    "French Ligue 1": "https://www.thesportsdb.com/images/media/league/badge/9f7z9d1742983155.png",
    "Greek Superleague Greece": "https://www.thesportsdb.com/images/media/league/badge/jm7ky01602788843.png",
    "Dutch Eredivisie": "https://www.thesportsdb.com/images/media/league/badge/5cdsu21725984946.png",
    "Belgian Pro League": "https://www.thesportsdb.com/images/media/league/badge/mjit7n1593634474.png",
    "Turkish Super Lig": "https://www.thesportsdb.com/images/media/league/badge/h7xx231601671132.png",
    "Danish Superliga": "https://www.thesportsdb.com/images/media/league/badge/28uq381687624585.png",
    "Portuguese Primeira Liga": "https://www.thesportsdb.com/images/media/league/badge/18vypq1732294716.png",
    "American Major League Soccer": "https://www.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png",
    "Swedish Allsvenskan": "https://www.thesportsdb.com/images/media/league/badge/denok11707459183.png",
    "Mexican Primera League": "https://www.thesportsdb.com/images/media/league/badge/mav5rx1686157960.png",
    "Brazilian Serie A": "https://www.thesportsdb.com/images/media/league/badge/ny47lx1701964009.png",
    "Ukrainian Premier League": "https://www.thesportsdb.com/images/media/league/badge/qprvpy1471773025.png",
    "Russian Football Premier League": "https://www.thesportsdb.com/images/media/league/badge/d4yp7g1690178551.png",
    "Australian A-League": "https://www.thesportsdb.com/images/media/league/badge/2u78lm1638459575.png",
    "Norwegian Eliteserien": "https://www.thesportsdb.com/images/media/league/badge/owo80l1512822583.png",
    "Chinese Super League": "https://www.thesportsdb.com/images/media/league/badge/jqwkag1697648182.png",
    "Italian Serie B": "https://www.thesportsdb.com/images/media/league/badge/uf5kph1598011132.png",
    "Scottish Championship": "https://www.thesportsdb.com/images/media/league/badge/i57nok1721301867.png",
    "English League 1": "https://www.thesportsdb.com/images/media/league/badge/afedb31688770443.png",
    "English League 2": "https://www.thesportsdb.com/images/media/league/badge/jmb3ms1688770451.png",
    "Italian Serie C Girone C": "https://www.thesportsdb.com/images/media/league/badge/3gzcx81720176510.png",
    "German 2. Bundesliga": "https://www.thesportsdb.com/images/media/league/badge/hl40981534764789.png",
    "Spanish La Liga 2": "https://www.thesportsdb.com/images/media/league/badge/r7u6821688425700.png",
    "French Ligue 2": "https://www.thesportsdb.com/images/media/league/badge/aofb771742983333.png",
    "Swedish Superettan": "https://www.thesportsdb.com/images/media/league/badge/uvzmu21707459258.png",
    "Brazilian Serie B": "https://www.thesportsdb.com/images/media/league/badge/i6mtvt1736403394.png",
    "Argentinian Primera Division": "https://www.thesportsdb.com/images/media/league/badge/1vslha1589960216.png",

    // 🔽 Agrega aquí tus propios logos siguiendo el formato:
    // "Nombre exacto de la liga en la API": "ruta/al/logo.png"
};
let posicionScroll = 0;

async function cargarLigasFutbol() {
    try {
        const respuesta = await fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php");
        const datos = await respuesta.json();
        const ligas = datos.leagues.filter(liga => liga.strSport === "Soccer");

        ligas.forEach(liga => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "inline-block bg-gray-800 rounded-xl overflow-hidden shadow-md w-48 flex-shrink-0";

            const logo = logosLigas[liga.strLeague] || "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"; // Usa un logo genérico si no existe

            tarjeta.innerHTML = `
                <img src="${logo}" alt="${liga.strLeague}" class="w-full h-48 object-contain bg-black" />
                <div class="p-3">
                    <h3 class="text-white text-center text-sm font-semibold">${liga.strLeague}</h3>
                </div>
            `;

            contenedorCarrusel.appendChild(tarjeta);
        });
    } catch (error) {
        console.error("Error al cargar ligas:", error);
    }
}

// Flechas
document.getElementById('btnIzquierda').addEventListener('click', () => {
    contenedorCarrusel.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('btnDerecha').addEventListener('click', () => {
    contenedorCarrusel.scrollBy({ left: 300, behavior: 'smooth' });
});

// Desplazamiento automático cada 4 segundos
setInterval(() => {
    contenedorCarrusel.scrollBy({ left: 300, behavior: 'smooth' });
}, 6000);

// Ejecutar
cargarLigasFutbol();

botonBuscar.addEventListener("click", () => {
    buscarEquipo();
});

inputBuscar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") buscarEquipo();
});

async function buscarEquipo() {
    const termino = inputBuscar.value.trim();

    if (!termino) {
        contenedorCarrusel.innerHTML = "";
        await cargarLigasFutbol();
        return;
    }

    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(termino)}`);
        const data = await res.json();
        const equipos = data.teams;
        contenedorCarrusel.innerHTML = "";

        if (!equipos) {
            contenedorCarrusel.innerHTML = `<p class="text-white text-center w-full">Equipo no encontrado.</p>`;
            return;
        }

        equipos.forEach((equipo) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "inline-block bg-gray-800 rounded-xl overflow-hidden shadow-md w-60 flex-shrink-0 mx-2";

            tarjeta.innerHTML = `
                <img src="${equipo.strTeamBadge || 'img/bucaros.png'}" alt="${equipo.strTeam}" class="w-full h-48 object-contain bg-black" />
                <div class="p-3">
                    <h3 class="text-white text-center text-lg font-semibold">${equipo.strTeam}</h3>
                    <p class="text-gray-300 text-center text-sm">${equipo.strLeague}</p>
                    <p class="text-gray-400 text-center text-xs">${equipo.strCountry}</p>
                    <button class="ver-mas mt-2 block mx-auto bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded" data-id="${equipo.idTeam}">
                        Ver más
                    </button>
                </div>
            `;

            contenedorCarrusel.appendChild(tarjeta);

            const boton = tarjeta.querySelector(".ver-mas");

            boton.addEventListener("click", async (e) => {
                const nombreEquipo = e.target.closest("div").querySelector("h3").textContent.trim();
                console.log("Buscando equipo por nombre:", nombreEquipo);

                try {
                    const resDetalle = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${encodeURIComponent(nombreEquipo)}`, {
                        cache: "no-store"
                    });
                    const dataDetalle = await resDetalle.json();

                    if (dataDetalle.teams && dataDetalle.teams.length > 0) {
                        const detalle = dataDetalle.teams[0];

                        document.getElementById("modalNombre").textContent = detalle.strTeam;
                        document.getElementById("modalLiga").textContent = detalle.strLeague;
                        document.getElementById("modalPais").textContent = detalle.strCountry;
                        document.getElementById("modalLogo").src = detalle.strTeamBadge;
                        document.getElementById("modalDescripcion").textContent = detalle.strDescriptionEN?.slice(0, 500) || "Sin descripción.";
                        document.getElementById("modalEstadio").textContent = `Estadio: ${detalle.strStadium}`;
                        document.getElementById("modalFundacion").textContent = `Fundado en: ${detalle.intFormedYear}`;

                        document.getElementById("modalEquipo").classList.remove("hidden");
                    } else {
                        alert("No se encontró información del equipo.");
                    }
                } catch (error) {
                    console.error("Error al buscar por nombre:", error);
                }
            });

        });


    } catch (error) {
        console.error("Error al buscar equipos:", error);
        contenedorCarrusel.innerHTML = `<p class="text-white text-center w-full">Error al buscar equipo.</p>`;
    }
}

document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modalEquipo").classList.add("hidden");
});

const filtroLigas = document.getElementById("filterSport");

filtroLigas.addEventListener("change", async function () {
    const nombreLiga = this.value;

    contenedorCarrusel.innerHTML = "";

    if (!nombreLiga) {
        // Si seleccionó "Todas las ligas"
        await cargarLigasFutbol();
        return;
    }

    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${encodeURIComponent(nombreLiga)}`);
        const data = await res.json();
        const equipos = data.teams;

        if (!equipos) {
            contenedorCarrusel.innerHTML = `<p class="text-white text-center w-full">No se encontraron equipos.</p>`;
            return;
        }

        equipos.forEach((equipo) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "inline-block bg-gray-800 rounded-xl overflow-hidden shadow-md w-60 flex-shrink-0 mx-2";

            tarjeta.innerHTML = `
                <img src="${equipo.strTeamBadge || 'img/bucaros.png'}" alt="${equipo.strTeam}" class="w-full h-48 object-contain bg-black" />
                <div class="p-3">
                    <h3 class="text-white text-center text-lg font-semibold">${equipo.strTeam}</h3>
                    <p class="text-gray-300 text-center text-sm">${equipo.strLeague}</p>
                    <p class="text-gray-400 text-center text-xs">${equipo.strCountry}</p>
                    <button class="ver-mas mt-2 block mx-auto bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded">
                        Ver más
                    </button>
                    <button class="btn-favorito mt-2 block mx-auto text-yellow-400 text-xs">
                       ⭐ Favorito
                    </button>
                </div>
            `;


            const boton = tarjeta.querySelector(".ver-mas");

            boton.addEventListener("click", async () => {
                try {
                    const resDetalle = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${encodeURIComponent(equipo.strTeam)}`);
                    const dataDetalle = await resDetalle.json();
                    const detalle = dataDetalle.teams?.[0];

                    if (detalle) {
                        document.getElementById("modalNombre").textContent = detalle.strTeam;
                        document.getElementById("modalLiga").textContent = detalle.strLeague;
                        document.getElementById("modalPais").textContent = detalle.strCountry;
                        document.getElementById("modalLogo").src = detalle.strTeamBadge;
                        document.getElementById("modalDescripcion").textContent = detalle.strDescriptionEN?.slice(0, 500) || "Sin descripción.";
                        document.getElementById("modalEstadio").textContent = `Estadio: ${detalle.strStadium}`;
                        document.getElementById("modalFundacion").textContent = `Fundado en: ${detalle.intFormedYear}`;

                        document.getElementById("modalEquipo").classList.remove("hidden");
                    }
                } catch (error) {
                    console.error("Error al obtener detalles del equipo:", error);
                }
            });

            const botonFavorito = tarjeta.querySelector(".btn-favorito");

            botonFavorito.addEventListener("click", () => {
                toggleFavorito(equipo);
            });


            contenedorCarrusel.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error al filtrar equipos:", error);
        contenedorCarrusel.innerHTML = `<p class="text-white text-center w-full">Error al cargar equipos.</p>`;
    }
});

function toggleFavorito(equipo) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.find(fav => fav.idTeam === equipo.idTeam);

    if (existe) {
        favoritos = favoritos.filter(fav => fav.idTeam !== equipo.idTeam);
        alert(`${equipo.strTeam} eliminado de favoritos`);
    } else {
        if (favoritos.length >= 6) {
            alert("Solo puedes tener 6 equipos favoritos. Elimina uno para agregar otro.");
            return;
        }
        favoritos.push(equipo);
        alert(`${equipo.strTeam} agregado a favoritos`);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

document.getElementById("btn-Favoritos").addEventListener("click", mostrarFavoritos);

function mostrarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    contenedorCarrusel.innerHTML = "";

    if (favoritos.length === 0) {
        contenedorCarrusel.innerHTML = `<p class="text-white text-center w-full">No tienes equipos favoritos.</p>`;
        return;
    }

    favoritos.forEach((equipo) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "inline-block bg-gray-800 rounded-xl overflow-hidden shadow-md w-60 flex-shrink-0 mx-2";

        tarjeta.innerHTML = `
            <img src="${equipo.strTeamBadge || 'img/bucaros.png'}" alt="${equipo.strTeam}" class="w-full h-48 object-contain bg-black" />
            <div class="p-3">
                <h3 class="text-white text-center text-lg font-semibold">${equipo.strTeam}</h3>
                <p class="text-gray-300 text-center text-sm">${equipo.strLeague}</p>
                <p class="text-gray-400 text-center text-xs">${equipo.strCountry}</p>
                <button class="ver-mas mt-2 block mx-auto bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded">
                    Ver más
                </button>
                <button class="btn-favorito mt-2 mx-auto block text-yellow-400 text-sm">❌ Quitar</button>
            </div>
        `;

        tarjeta.querySelector(".ver-mas").addEventListener("click", async () => {
            try {
                const resDetalle = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${encodeURIComponent(equipo.strTeam)}`);
                const dataDetalle = await resDetalle.json();
                const detalle = dataDetalle.teams?.[0];

                if (detalle) {
                    document.getElementById("modalNombre").textContent = detalle.strTeam;
                    document.getElementById("modalLiga").textContent = detalle.strLeague;
                    document.getElementById("modalPais").textContent = detalle.strCountry;
                    document.getElementById("modalLogo").src = detalle.strTeamBadge;
                    document.getElementById("modalDescripcion").textContent = detalle.strDescriptionEN?.slice(0, 500) || "Sin descripción.";
                    document.getElementById("modalEstadio").textContent = `Estadio: ${detalle.strStadium}`;
                    document.getElementById("modalFundacion").textContent = `Fundado en: ${detalle.intFormedYear}`;

                    document.getElementById("modalEquipo").classList.remove("hidden");
                }
            } catch (error) {
                console.error("Error al obtener detalles del equipo:", error);
            }
        });


        tarjeta.querySelector(".btn-favorito").addEventListener("click", () => {
            toggleFavorito(equipo);
            mostrarFavoritos(); // refrescar la vista
        });

        contenedorCarrusel.appendChild(tarjeta);
    });
}

