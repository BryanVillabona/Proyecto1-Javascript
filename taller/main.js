/*
Aplicación para gestionar una veterinaria.
Funcionalidades:

Registrar una nueva mascota.

Listar todas las mascotas registradas.

Buscar una mascota por nombre.

Actualizar el estado de salud de una mascota.

Eliminar una mascota por nombre.

Salir del programa.

Para correr este script puedes copiar y pegar el código en la consola del navegador.

(function () {
  // Base de datos de mascotas: array de objetos
  const mascotas = [];
  // Función para registrar una mascota
  function registrarMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota:");
    if (!nombre) {
      alert("El nombre es requerido.");
      return;
    }
    // Menú para elegir la especie
    const especieInput = prompt(
      "Seleccione la especie de la mascota:\n" +
      "1. Perro\n" +
      "2. Gato\n" +
      "3. Otro"
    );

    let especie = "";
    switch (especieInput) {
      case "1":
        especie = "Perro";
        break;
      case "2":
        especie = "Gato";
        break;
      case "3":
        especie = prompt("Ingrese la especie de la mascota:");
        if (!especie) {
          alert("La especie es requerida.");
          return;
        }
        break;
      default:
        alert("Opción inválida para especie.");
        return;
    }

    const edadInput = prompt("Ingrese la edad de la mascota:");
    const edad = parseInt(edadInput, 10);
    if (isNaN(edad)) {
      alert("Edad inválida.");
      return;
    }

    const pesoInput = prompt("Ingrese el peso de la mascota:");
    const peso = parseFloat(pesoInput);
    if (isNaN(peso)) {
      alert("Peso inválido.");
      return;
    }

    // Menú para elegir el estado de salud
    const estadoInput = prompt(
      "Seleccione el estado de salud de la mascota:\n" +
      "1. Sano\n" +
      "2. Enfermo\n" +
      "3. En tratamiento"
    );

    let estadoSalud = "";
    switch (estadoInput) {
      case "1":
        estadoSalud = "Sano";
        break;
      case "2":
        estadoSalud = "Enfermo";
        break;
      case "3":
        estadoSalud = "En tratamiento";
        break;
      default:
        alert("Opción inválida para estado de salud.");
        return;
    }

    const nuevaMascota = {
      nombre,
      especie,
      edad,
      peso,
      estadoSalud
    };

    mascotas.push(nuevaMascota);
    alert("Mascota registrada exitosamente");
  }
  // Función para listar mascotas
  function listarMascotas() {
    if (mascotas.length === 0) {
      alert("No hay mascotas registradas");
      return;
    }
    let lista = "Mascotas registradas:\n";
    mascotas.forEach((mascota, index) => {
      lista += `${index + 1}. Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado de salud: ${mascota.estadoSalud}\n`;
    });
    alert(lista);
  }
  // Función para buscar una mascota por nombre
  function buscarMascota() {
    if (mascotas.length === 0) {
      alert("No hay mascotas registradas");
      return;
    }
    const nombreBusqueda = prompt("Ingrese el nombre de la mascota a buscar:");
    const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    if (mascota) {
      alert(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad: ${mascota.edad}\nPeso: ${mascota.peso}\nEstado de salud: ${mascota.estadoSalud}`);
    } else {
      alert("Mascota no encontrada");
    }
  }
  // Función para actualizar el estado de salud de una mascota por nombre
  function actualizarEstadoSalud() {
    if (mascotas.length === 0) {
      alert("No hay mascotas registradas");
      return;
    }
    const nombreBusqueda = prompt("Ingrese el nombre de la mascota a actualizar:");
    const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    if (mascota) {
      const nuevoEstadoInput = prompt(
        "Seleccione el nuevo estado de salud:\n" +
        "1. Sano\n" +
        "2. Enfermo\n" +
        "3. En tratamiento"
      );
      let nuevoEstado = "";
      switch (nuevoEstadoInput) {
        case "1":
          nuevoEstado = "Sano";
          break;
        case "2":
          nuevoEstado = "Enfermo";
          break;
        case "3":
          nuevoEstado = "En tratamiento";
          break;
        default:
          alert("Opción inválida para estado de salud.");
          return;
      }
      mascota.estadoSalud = nuevoEstado;
      alert("Estado de salud actualizado correctamente");
    } else {
      alert("Mascota no encontrada");
    }
  }
  // Función para eliminar una mascota por nombre
  function eliminarMascota() {
    if (mascotas.length === 0) {
      alert("No hay mascotas registradas");
      return;
    }
    const nombreBusqueda = prompt("Ingrese el nombre de la mascota a eliminar:");
    const indice = mascotas.findIndex(m => m.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    if (indice !== -1) {
      mascotas.splice(indice, 1);
      alert("Mascota eliminada correctamente");
    } else {
      alert("Mascota no encontrada");
    }
  }
  // Menú principal
  function menu() {
    let opcion;
    do {
      opcion = prompt(
        "Bienvenido a la Veterinaria\n" +
        "Seleccione una opción:\n" +
        "1. Registrar una nueva mascota\n" +
        "2. Listar todas las mascotas registradas\n" +
        "3. Buscar una mascota por nombre\n" +
        "4. Actualizar el estado de salud de una mascota\n" +
        "5. Eliminar una mascota por nombre\n" +
        "6. Salir"
      );
      switch (opcion) {
        case "1":
          registrarMascota();
          break;
        case "2":
          listarMascotas();
          break;
        case "3":
          buscarMascota();
          break;
        case "4":
          actualizarEstadoSalud();
          break;
        case "5":
          eliminarMascota();
          break;
        case "6":
          alert("Gracias por utilizar la aplicación de la Veterinaria");
          break;
        default:
          alert("Opción inválida. Intenta de nuevo.");
      }
    } while (opcion !== "6");
  }
  // Ejecutar el menú principal al cargar el script
  menu();
})();

*/

