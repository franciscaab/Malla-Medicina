const data = {
  "Semestre 1": [
    { nombre: "Fundamentos de la Medicina", tipo: "disciplinar" },
    { nombre: "Biología Molecular y Genética", tipo: "básica" },
    { nombre: "Anatomía Humana I", tipo: "básica" },
    { nombre: "Fundamentos de la Química", tipo: "básica" },
    { nombre: "Psicología para la atención en Salud", tipo: "básica" }
  ],
  "Semestre 2": [
    { nombre: "Histoembriología I", tipo: "básica" },
    { nombre: "Anatomía Humana II", tipo: "básica", prerequisitos: ["Anatomía Humana I"] },
    { nombre: "Fundamentos de Bioquímica", tipo: "básica", prerequisitos: ["Fundamentos de la Química"] },
    { nombre: "Psicología en el Curso de la Vida", tipo: "básica", prerequisitos: ["Psicología para la atención en Salud"] },
    { nombre: "Salud y Sociedad", tipo: "básica" },
    { nombre: "Electivo I", tipo: "electiva" }
  ],
   "Semestre 3": [
    { nombre: "Semiología I", tipo: "disciplinar", prerequisitos: ["Anatomía Humana II"] },
    { nombre: "Fisiología Médica I", tipo: "disciplinar", prerequisitos: ["Anatomía Humana II"] },
    { nombre: "Histoembriología II", tipo: "básica", prerequisitos: ["Histoembriología I", "Anatomía Humana II"] },
    { nombre: "Neurociencias", tipo: "básica", prerequisitos: ["Anatomía Humana II"] },
    { nombre: "Electivo II", tipo: "electiva" }
  ],
   "Semestre 4": [
    { nombre: "Semiología II", tipo: "disciplinar", prerequisitos: ["Semiología I", "Neurociencias"] },
    { nombre: "Agentes Infecciosos I", tipo: "disciplinar", prerequisitos: ["Semiología I", "Fisiología Médica I"] },
    { nombre: "Fisiología Médica II", tipo: "disciplinar", prerequisitos: ["Fisiología Médica I", "Histoembriología II"] },
    { nombre: "Inmunología e Inmunización", tipo: "disciplinar", prerequisitos: ["Fisiología Médica I", "Biología Molecular y Genética"] },
    { nombre: "Métodos de investigación en Salud y Bioestadística Aplicada", tipo: "básica" },
    { nombre: "Electivo III", tipo: "electiva" }
  ],
   "Semestre 5": [
    { nombre: "Atención Primaria y Alta Prevalencia", tipo: "disciplinar", prerequisitos: ["Agentes Infecciosos I", "Inmunología e Inmunización"] },
    { nombre: "Agentes Infecciosos II", tipo: "disciplinar", prerequisitos: ["Semiología I", "Fisiología Médica I"] },
    { nombre: "Integrado de Patología Morfofuncional I", tipo: "disciplinar", prerequisitos: ["Fisiología Médica II", "Semiología II"] },
    { nombre: "Farmacología I", tipo: "disciplinar", prerequisitos: ["Fisiología Médica I", "Semiología II"] },
    { nombre: "Salud Basada en la Evidencia", tipo: "básica" },
    { nombre: "Electivo IV", tipo: "electiva" }
  ],
   "Semestre 6": [
    { nombre: "Medicina Interna I", tipo: "disciplinar", prerequisitos: ["Atención Primaria y Alta Prevalencia", "Integrado de Patología Morfofuncional I"] },
    { nombre: "Integrado de Patología Morfofuncional II", tipo: "disciplinar", prerequisitos: ["Integrado de Patología Morfofuncional I", "Agentes Infecciosos II"] },
    { nombre: "Nutrición Clínica", tipo: "disciplinar", prerequisitos: ["Integrado de Patología Morfofuncional I", "Atención Primaria y Alta Prevalencia"] },
    { nombre: "Farmacología II", tipo: "disciplinar", prerequisitos: ["Farmacología I", "Integrado de Patología Morfofuncional I"] },
    { nombre: "Fundamentos del Ecosistema de Salud Digital", tipo: "certificación" }
  ],
   "Semestre 7": [
    { nombre: "Medicina Interna II", tipo: "disciplinar", prerequisitos: ["Medicina Interna I", "Integrado de Patología Morfofuncional II"] },
    { nombre: "Neurología", tipo: "disciplinar", prerequisitos: ["Medicina Interna I"] },
    { nombre: "Especialidades Médicas I", tipo: "disciplinar", prerequisitos: ["Integrado de Patología Morfofuncional II"] },
    { nombre: "Salud Pública y Epidemiología", tipo: "básica" },
    { nombre: "Bioética", tipo: "certificación" }
  ],
   "Semestre 8": [
    { nombre: "Cirugía", tipo: "disciplinar", prerequisitos: ["Medicina Interna II", "Farmacología II"] },
    { nombre: "Traumatología", tipo: "disciplinar", prerequisitos: ["Medicina Interna II"] },
    { nombre: "Especialidades Médicas II", tipo: "disciplinar", prerequisitos: ["Especialidades Médicas I"] },
    { nombre: "Métodos de Diagnóstico Clínico", tipo: "disciplinar", prerequisitos: ["Medicina Interna II", "Nutrición Clínica"] },
    { nombre: "Gestión en Sistemas de Salud", tipo: "básica" }
  ],
   "Semestre 9": [
    { nombre: "Medicina Aplicada I", tipo: "disciplinar", prerequisitos: ["Cirugía"] },
    { nombre: "Pediatría, Traumatología y Cirugía Infantil", tipo: "disciplinar", prerequisitos: ["Especialidades Médicas II"] },
    { nombre: "Medicina Legal", tipo: "disciplinar", prerequisitos: ["Traumatología"] },
    { nombre: "Psiquiatría Infanto-Juvenil y del Adulto I", tipo: "disciplinar", prerequisitos: ["Neurología"] },
    { nombre: "Oncología y Cuidados Paliativos", tipo: "disciplinar", prerequisitos: ["Métodos de Diagnóstico Clínico", "Cirugía"] }
  ],
   "Semestre 10": [
    { nombre: "Medicina Aplicada II", tipo: "disciplinar", prerequisitos: ["Medicina Aplicada I"] },
    { nombre: "Ginecología y Obstetricia", tipo: "disciplinar", prerequisitos: ["Cirugía", "Medicina Interna II"] },
    { nombre: "Especialidades Médicas III", tipo: "disciplinar", prerequisitos: ["Especialidades Médicas II", "Traumatología", "Medicina Interna II"] },
    { nombre: "Psiquiatría Infanto-Juvenil y del Adulto II", tipo: "disciplinar", prerequisitos: ["Psiquiatría Infanto-Juvenil y del Adulto I"] },
    { nombre: "Inteligencia Artificial Aplicada a la Salud", tipo: "certificación" }
  ],
   "Semestre 11 y 12": [
    { nombre: "Internado de Medicina Interna", tipo: "disciplinar", prerequisitos: ["TODO_CICLO_1"] },
    { nombre: "Internado de Pediatría", tipo: "disciplinar", prerequisitos: ["TODO_CICLO_1"] },
    { nombre: "Internado de Psiquiatría", tipo: "disciplinar", prerequisitos: ["TODO_CICLO_1"] },
    { nombre: "Internado de Salud en Persona Mayor", tipo: "disciplinar", prerequisitos: ["TODO_CICLO_1"] },
    { nombre: "Internado Electivo I", tipo: "disciplinar", prerequisitos: ["TODO_CICLO_1"] }
 ],
   "Semestre 13 y 14": [
    { nombre: "Internado de Atención Primaria", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Internado de Cirugía", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Internado de Urgencia", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Internado de Obstetricia y Ginecología", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Internado Electivo II", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Internado Electivo III", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] },
    { nombre: "Integración para la Práctica Profesional", tipo: "disciplinar", prerequisitos: ["Internado de Medicina Interna", "Internado de Pediatría", "Internado de Psiquiatría", "Internado de Salud en Persona Mayor"] }
 ] 
};

const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos") || "{}");

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function tienePrerequisitosCumplidos(prereqs) {
  return prereqs.every(nombre => {
    if (nombre === "TODO_CICLO_1") {
      return todosLosRamosDelCiclo1Aprobados();
    }
    return estadoRamos[nombre] === "aprobado";
  });
}
  
function todosLosRamosDelCiclo1Aprobados() {
  const ramosCiclo1 = Object.entries(data)
    .filter(([semestre]) => !semestre.includes("11") && !semestre.includes("12") && !semestre.includes("13") && !semestre.includes("14"))
    .flatMap(([_, ramos]) => ramos);

  return ramosCiclo1.every(ramo => estadoRamos[ramo.nombre] === "aprobado");
}

function crearRamo(ramo, semestreContainer) {
  const div = document.createElement("div");
  div.textContent = ramo.nombre;
  div.setAttribute("data-tipo", ramo.tipo);

  const estado = estadoRamos[ramo.nombre];
  let bloqueado = false;

  if (ramo.prerequisitos && !tienePrerequisitosCumplidos(ramo.prerequisitos)) {
    bloqueado = true;
  }
  if (
    ramo.nombre.includes("Internado") ||
    ramo.nombre.includes("Integrado Electivo") ||
    ramo.nombre.includes("Integración para la Práctica")
  ) {
    if (!todosLosRamosDelCiclo1Aprobados()) {
      bloqueado = true;
    }
  }

  // Caso: Aprobado
  if (estado === "aprobado") {
    div.className = "ramo aprobado";
  }

  // Caso: Bloqueado
  else if (bloqueado) {
    div.className = "ramo bloqueado";
  }

  // Caso: Pendiente
  else {
    div.className = `ramo pendiente ${ramo.tipo}`;
    div.addEventListener("click", () => {
      const tipoOriginal = div.getAttribute("data-tipo");

      if (div.classList.contains("aprobado")) {
        div.classList.remove("aprobado");
        div.classList.add("pendiente", tipoOriginal);
        estadoRamos[ramo.nombre] = "pendiente";
      } else {
        div.classList.remove("pendiente", tipoOriginal);
        div.classList.add("aprobado");
        estadoRamos[ramo.nombre] = "aprobado";
      }

      guardarEstado();
      render();
    });
  }

  semestreContainer.appendChild(div);
}

function render() {
  const filaSuperior = document.getElementById("fila-superior");
  const filaInferior = document.getElementById("fila-inferior");

  filaSuperior.innerHTML = "";
  filaInferior.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(data)) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    semestreDiv.appendChild(titulo);

    ramos.forEach(ramo => crearRamo(ramo, semestreDiv));

    // Enviar a la fila superior (semestre 1 a 8)
    const numeroSemestre = parseInt(semestre.match(/\d+/)?.[0] || "0");
    if (numeroSemestre >= 1 && numeroSemestre <= 8) {
      filaSuperior.appendChild(semestreDiv);
    } else {
      filaInferior.appendChild(semestreDiv);
    }
  }
}

render();
function resetearMalla() {
  localStorage.clear();
  location.reload();
}
