console.log("script3.js cargado");

// la variable para almacenar los registros
let registros = [];
let editandoIndice = null;

// función de validación
function validar() {
    const telefono = document.getElementById("telefono").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");
    const errorPassword = document.getElementById("errorPassword");

    let valido = true;

    // validación del teléfono
    if (telefono === "") {
        errorTelefono.textContent = "el telefono es obligatorio";
        valido = false;
    } else {
        errorTelefono.textContent = "";
    }

    // validación de la contraseña
    if (password === "") {
        errorPassword.textContent = "la contraseña es obligatoria";
        valido = false;
    } else if (password.length <= 5) {
        errorPassword.textContent = "la contraseña debe tener mas de 5 caracteres";
        valido = false;
    } else {
        errorPassword.textContent = "";
    }

    if (valido) {
        if (editandoIndice !== null) {
            actualizarRegistro(telefono, password);
        } else {
            agregarRegistro(telefono, password);
        }
        limpiarFormulario();
        mostrarTabla();
    }
}

// agregar un nuevo registro al arreglo
function agregarRegistro(telefono, password) {
    registros.push({ telefono, password });
}

// actualiza un registro que ya existe
function actualizarRegistro(telefono, password) {
    registros[editandoIndice] = { telefono, password };
    editandoIndice = null;
}

// muestra todos los registros en la tabla
function mostrarTabla() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";

    registros.forEach((item, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.telefono}</td>
            <td>${item.password}</td>
            <td>
                <button onclick="editarRegistro(${index})">Editar</button>
                <button onclick="eliminarRegistro(${index})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

// eliminar un registro con confirmación
function eliminarRegistro(index) {
    const confirmar = confirm("¿seguro de eliminar este registro?");
    if (confirmar) {
        registros.splice(index, 1);
        mostrarTabla();
    }
}

// carga los datos al formulario para editar
function editarRegistro(index) {
    const registro = registros[index];
    document.getElementById("telefono").value = registro.telefono;
    document.getElementById("password").value = registro.password;
    editandoIndice = index;
}

// para limpiar los campos del formulario
function limpiarFormulario() {
    document.getElementById("miFormulario").reset();
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorPassword").textContent = "";
}
