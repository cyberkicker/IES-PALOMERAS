// Seleccionar los elementos de los submenús
const servicesLink = document.getElementById('services-link');
const servicesSubmenu = document.getElementById('services-submenu');

const aboutLink = document.getElementById('about-link');
const aboutSubmenu = document.getElementById('about-submenu');

// Controlar el despliegue de los submenús
let servicesSubmenuVisible = false;
let aboutSubmenuVisible = false;

// Función para gestionar la visibilidad del submenú
function toggleSubmenu(submenu, submenuVisible) {
    if (submenuVisible) {
        submenu.style.display = 'flex';
    } else {
        submenu.style.display = 'none';
    }
}

// Toggle submenú Servicios
servicesLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Si el submenú de Acerca de está abierto, cerrarlo
    if (aboutSubmenuVisible) {
        aboutSubmenu.style.display = 'none';
        aboutSubmenuVisible = false;
    }
    // Alternar el submenú de Servicios
    servicesSubmenuVisible = !servicesSubmenuVisible;
    toggleSubmenu(servicesSubmenu, servicesSubmenuVisible);
});

// Toggle submenú Acerca de
aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Si el submenú de Servicios está abierto, cerrarlo
    if (servicesSubmenuVisible) {
        servicesSubmenu.style.display = 'none';
        servicesSubmenuVisible = false;
    }
    // Alternar el submenú de Acerca de
    aboutSubmenuVisible = !aboutSubmenuVisible;
    toggleSubmenu(aboutSubmenu, aboutSubmenuVisible);
});

// Cerrar el submenú si se hace clic fuera de la barra de navegación
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = servicesLink.contains(event.target) || servicesSubmenu.contains(event.target) || 
                                aboutLink.contains(event.target) || aboutSubmenu.contains(event.target);
    if (!isClickInsideNavbar) {
        if (servicesSubmenuVisible) {
            servicesSubmenu.style.display = 'none';
            servicesSubmenuVisible = false;
        }
        if (aboutSubmenuVisible) {
            aboutSubmenu.style.display = 'none';
            aboutSubmenuVisible = false;
        }
    }
});
