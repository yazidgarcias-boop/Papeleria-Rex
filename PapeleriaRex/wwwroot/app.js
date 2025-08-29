function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const productos = {
  dibujo: [],
  cuadernos: [],
  monografias: [],
  papel: [],
  estructuras: [],
  servicios: []
};

function agregarProducto(categoria) {
  const nombre = prompt("Nombre del producto:");
  const precio = prompt("Precio:");
  if (nombre && precio) {
    productos[categoria].push({ nombre, precio });
    render(categoria);
  }
}

function render(categoria) {
  const container = document.getElementById("productos-" + categoria);
  const arr = productos[categoria];
  if (arr.length === 0) {
    container.innerHTML = '<div class="muted">No hay elementos.</div>';
    return;
  }
  container.innerHTML = arr.map((p, i) => `
    <div>
      ${escapeHtml(p.nombre)} - $${escapeHtml(p.precio)}
      <button onclick="eliminarProducto('${categoria}', ${i})">Eliminar</button>
    </div>
  `).join("");
}

function eliminarProducto(categoria, index) {
  productos[categoria].splice(index, 1);
  render(categoria);
}

function guardarContacto() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  alert("Contacto guardado:\n" + nombre + "\n" + email + "\n" + mensaje);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

// Mostrar la primera sección por defecto
showSection("dibujo");
