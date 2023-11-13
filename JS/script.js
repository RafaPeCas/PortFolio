// // Función para cambiar el color de fondo
// function cambiarColorFondo() {
//     // Obtener el color que deseas
//     var colorDeseado = '#ff0000'; // Puedes cambiar esto al color que prefieras

//     // Aplicar el color de fondo al body
//     document.body.style.backgroundColor = colorDeseado;
// }

// // Llamar a la función cuando la página se cargue
// window.onload = cambiarColorFondo;

function toggleDropdown() {
        var dropdown = document.getElementById("myDrop");
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("drop-content");
                for (var i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.style.display === 'block') {
                                openDropdown.style.display = 'none';
                        }
                }
        }
}