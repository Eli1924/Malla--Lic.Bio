const ramos = [
  // 1er semestre
  { id: "MCLB1401", nombre: "Matemáticas I", creditos: 7, requisitos: [], semestre: 1 },
  { id: "QCLB1111", nombre: "Química General I", creditos: 7, requisitos: [], semestre: 1 },
  { id: "BCLB1101", nombre: "Biología Celular", creditos: 7, requisitos: [], semestre: 1 },
  { id: "BCLB1201", nombre: "Zoología de Invertebrados", creditos: 8, requisitos: [], semestre: 1 },

  // 2do semestre
  { id: "MCLB2401", nombre: "Matemáticas II", creditos: 7, requisitos: ["MCLB1401"], semestre: 2 },
  { id: "QCLB2121", nombre: "Química General II", creditos: 7, requisitos: ["QCLB1111"], semestre: 2 },
  { id: "FCLB2201", nombre: "Introducción a la Mecánica", creditos: 7, requisitos: ["MCLB1401"], semestre: 2 },
  { id: "BCLB5201", nombre: "Biología Vegetal", creditos: 6, requisitos: [], semestre: 2 },
  { id: "IC01", nombre: "Inglés científico I", creditos: 3, requisitos: [], semestre: 2 },

  // 3er semestre
  { id: "FCLB3201", nombre: "Óptica y Electromagnetismo", creditos: 7, requisitos: ["FCLB2201"], semestre: 3 },
  { id: "QCLB3301", nombre: "Química Orgánica", creditos: 8, requisitos: ["QCLB2121"], semestre: 3 },
  { id: "ECLB3201", nombre: "Zoología de Vertebrados", creditos: 7, requisitos: ["BCLB1201"], semestre: 3 },
  { id: "QCLB2221", nombre: "Fisicoquímica", creditos: 8, requisitos: ["QCLB2121", "MCLB2401"], semestre: 3 },

  // 4to semestre
  { id: "MCLB3401", nombre: "Matemáticas III", creditos: 8, requisitos: ["MCLB2401"], semestre: 4 },
  { id: "BALB4211", nombre: "Bioquímica", creditos: 9, requisitos: ["QCLB2221", "QCLB3301", "BCLB1101"], semestre: 4 },
  { id: "CSLB1002", nombre: "Neurobiología", creditos: 8, requisitos: ["QCLB2221", "BCLB1101", "ECLB3201"], semestre: 4 },
  { id: "CFG1", nombre: "CFG-1", creditos: 0, requisitos: [], semestre: 4 },
  { id: "IC02", nombre: "Inglés Científico II", creditos: 3, requisitos: ["IC01"], semestre: 4 },

  // 5to semestre
  { id: "ECLB7701", nombre: "Genética", creditos: 8, requisitos: ["BALB4211"], semestre: 5 },
  { id: "BCLB7111", nombre: "Microbiología", creditos: 8, requisitos: ["BALB4211"], semestre: 5 },
  { id: "ECLB5301", nombre: "Bioestadística", creditos: 6, requisitos: ["MCLB3401"], semestre: 5 },
  { id: "BCLB8401", nombre: "Unidad de Investigación I", creditos: 8, requisitos: ["BCLB5201", "BALB4211", "ECLB3201"], semestre: 5 },

  // 6to semestre
  { id: "BCLB6201", nombre: "Biología Molecular", creditos: 7, requisitos: ["BCLB7111", "ECLB7701"], semestre: 6 },
  { id: "ECLB6201", nombre: "Ecología", creditos: 8, requisitos: ["BCLB5201", "ECLB3201", "ECLB5301"], semestre: 6 },
  { id: "ECLB6151", nombre: "Zoología de Campo", creditos: 8, requisitos: ["ECLB5301", "BCLB5201", "ECLB3201"], semestre: 6 },
  { id: "ECLB6101", nombre: "Botánica de Campo", creditos: 8, requisitos: ["ECLB5301", "BCLB5201", "ECLB3201"], semestre: 6 },
  { id: "CSLB1060", nombre: "Bioinformática", creditos: 5, requisitos: ["ECLB7701", "ECLB5301"], semestre: 6 },
  { id: "CFG2", nombre: "CFG-2", creditos: 0, requisitos: [], semestre: 6 },

  // 7mo semestre
  { id: "BCLB7101", nombre: "Fisiología General", creditos: 8, requisitos: ["BALB4211", "MCLB3401"], semestre: 7 },
  { id: "ELEC1", nombre: "Electivo Especialidad I", creditos: 0, requisitos: [], semestre: 7 },
  { id: "BCLB9401", nombre: "Unidad de Investigación II", creditos: 9, requisitos: ["ECLB6201", "BCLB8401"], semestre: 7 },
  { id: "BCLB2201", nombre: "Biología del Desarrollo", creditos: 8, requisitos: ["BCLB6201"], semestre: 7 },

  // 8vo semestre
  { id: "BCLB8021", nombre: "Fisiología de Sistemas", creditos: 8, requisitos: ["BCLB7101", "ECLB3201"], semestre: 8 },
  { id: "BCLB8081", nombre: "Evolución", creditos: 8, requisitos: ["BCLB2201", "ECLB7701", "ECLB6201"], semestre: 8 },
  { id: "BCLB6221", nombre: "Fisiología Vegetal", creditos: 6, requisitos: ["BALB4211", "BCLB5201"], semestre: 8 },
  { id: "FCLB8151", nombre: "Filosofía y Ética de la Ciencia", creditos: 3, requisitos: ["BCLB2201", "ECLB6201"], semestre: 8 },
  { id: "ELEC2", nombre: "Electivo Especialidad II", creditos: 0, requisitos: [], semestre: 8 },
];

// Guardar ramos aprobados en localStorage
function guardarProgreso() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(r => r.id);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

// Cargar ramos aprobados desde localStorage
function cargarProgreso() {
  const guardados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");
  guardados.forEach(id => {
    const div = document.getElementById(id);
    if (div) div.classList.add("aprobado");
  });
}

// Crear caja HTML para un ramo
function crearCaja(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;
  div.innerHTML = `<h3>${ramo.nombre}</h3><p>(${ramo.id}) - ${ramo.creditos} créditos</p>`;
  div.onclick = () => aprobarRamo(ramo.id);
  return div;
}

// Activar/desactivar ramos según sus requisitos
function actualizarMalla() {
  let cambios = true;
  while (cambios) {
    cambios = false;
    ramos.forEach(r => {
      const div = document.getElementById(r.id);
      const aprobado = div.classList.contains("aprobado");
      const requisitosCumplidos = r.requisitos.every(reqId => {
        const reqDiv = document.getElementById(reqId);
        return reqDiv && reqDiv.classList.contains("aprobado");
      });

      // Activar si cumple requisitos
      if (!aprobado && requisitosCumplidos) {
        div.classList.add("activo");
      } else if (!aprobado) {
        div.classList.remove("activo");
      }

      // Si ya fue aprobado pero ya no cumple requisitos, desaprobarlo
      if (aprobado && !requisitosCumplidos) {
        div.classList.remove("aprobado");
        cambios = true; // Revalidar en siguiente ciclo
      }
    });
  }
  guardarProgreso(); // Guardar al final
}

// Al hacer clic en un ramo
function aprobarRamo(id) {
  const div = document.getElementById(id);
  if (div.classList.contains("activo") || div.classList.contains("aprobado")) {
    div.classList.toggle("aprobado");
    actualizarMalla();
  }
}

// Crear ramos y agregar al DOM
ramos.forEach(r => {
  const contenedor = document.getElementById(`semestre${r.semestre}`);
  if (contenedor) contenedor.appendChild(crearCaja(r));
});

cargarProgreso();
actualizarMalla();
