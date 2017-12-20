const contacto = document.getElementById('contacto');
const informacion = document.getElementById('informacion');
const escribirTotal = document.getElementById('escribir-total');
const titulo = document.getElementById('titulo');
const informacionMinimo = document.getElementById('informacion-minimo');
const contactoEscribir = document.getElementById('contacto-escribir');
const contactoInformacion = document.getElementById('contacto-informacion');
const $contacto = document.getElementById('Contacto');
const $toggle = document.getElementById('toggle');

contacto.addEventListener('click', toggle);
informacion.addEventListener('click', toggle);
$toggle.addEventListener('click', toggleContacto);
//info = document.addEventListener('click', toggle);
function toggle(){
  contacto.classList.toggle('active');
  informacion.classList.toggle('active');
  escribirTotal.classList.toggle('active');
  titulo.classList.toggle('active');
  informacionMinimo.classList.toggle('active');
  contactoInformacion.classList.toggle('active');
  contactoEscribir.classList.toggle('active');
};
function toggleContacto() {
  $contacto.classList.toggle('active');
  $toggle.classList.toggle('active');
  
  console.log("Contacto")
}