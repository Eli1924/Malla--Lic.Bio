const ramos = [
  // (Tu lista de ramos actual va aquí, no la repito para ahorrar espacio)
  // Usa exactamente la que ya tienes cargada en tu `script.js`
];

// ============ GUARDADO EN LOCALSTORAGE ============

function guardarProgreso() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(r => r.id);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function cargarProgreso() {
  const guardados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");
  guardados.forEach(id => {
    const div = document.getElementById(id);
    if (div) div.classList.add("aprobado");
  });
}

// ============ LÓGICA DE ACTIVACIÓN Y VALIDACIÓN ============

function actualizarMalla() {
  // Primero desmarcar todos los activos
  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    div.classList.remove("activo");

    const requisitosCumplidos = r.requisitos.every(reqId => {
      const reqDiv = document.getElementById(reqId);
      return reqDiv && reqDiv.classList.contains("aprobado");
    });

    if (!div.classList.contains("aprobado") && requisitosCumplidos) {
      div.classList.add("activo");
    }

    // Si el ramo está aprobado pero no se cumplen los requisitos, desaprobarlo automáticamente
    if (div.classList.contains("aprobado") && !requisitosCumplidos) {
      div.classList.remove("aprobado");
    }
  });

  guardarProgreso(); // Guardar al actualizar
}

// ============ CLIC DE APROBACIÓN/DESAPROBACIÓN ============

function aprobarRamo(id) {
  const div = document.getElementById(id);
  if (div.classList.contains("activo") || div.classList.contains("aprobado")) {
    div.classList.toggle("aprobado");
    actualizarMalla(); // Esto validará ramos dependientes
  }
}

// ============ CREAR RAMOS EN LA PÁGINA ============

function crearCaja(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;
  div.innerHTML = `<h3>${ramo.nombre}</h3><p>(${ramo.id}) - ${ramo.creditos} créditos</p>`;
  div.onclick = () => aprobarRamo(ramo.id);
  return div;
}

ramos.forEach(r => {
  const contenedor = document.getElementById(`semestre${r.semestre}`);
  if (contenedor) contenedor.appendChild(crearCaja(r));
});

cargarProgreso();
actualizarMalla();
