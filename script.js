// Tus datos de Supabase:
// Asegúrate que este script va después de cargar la librería en el HTML

// IMPORTANTE: Usa 'supabase' de la librería 'Supabase' con mayúscula S solo si hiciste esto:
// import { createClient } from '@supabase/supabase-js'  <--- solo en proyectos con bundler (no aplica a HTML puro)

// En HTML puro (como el tuyo), debes usar:
const { createClient } = supabase; // ✅ ESTO es lo correcto en HTML

// Luego inicializas:
const supabaseClient = createClient(
  'https://rleypvneqjctxhuklezr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZXlwdm5lcWpjdHhodWtsZXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODg5MDYsImV4cCI6MjA2Mzg2NDkwNn0.pvX_piAkl25QsYj_bvDUXd44Ugl1qJ16IPtDWzRDS90' // tu key
);

// Ahora puedes usar supabaseClient para acceder a tu base de datos

// Ejemplo de inserción:
async function insertarUsuario(nombre, correo) {
  const { data, error } = await supabaseClient
    .from('Usuarios')
    .insert([{ Nombre: nombre, Correo: correo }]);

  if (error) {
    console.error('Error insertando:', error);
  } else {
    console.log('Insertado con éxito:', data);
  }
}

document.querySelector('.subscription-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value.trim();
  const correo = e.target.correo.value.trim();
  if (!nombre || !correo) {
    alert('Por favor, completa todos los campos');
    return;
  }
  await insertarUsuario(nombre, correo);
  e.target.reset();
  alert('¡Gracias por suscribirte!');
});

// Obtener todos los enlaces del nav y las secciones
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // Detectar la sección visible
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Ajuste para header fijo
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });