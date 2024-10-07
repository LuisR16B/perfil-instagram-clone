const historias = document.getElementById('historias');
const post = document.getElementById('post');
const reels = document.getElementById('reels');
const etiquetas = document.getElementById('etiquetas');

const verPost = document.getElementById('verPost');
const verReels = document.getElementById('verReels');
const verEtiquetas = document.getElementById('verEtiquetas');

class tarjeta{
  constructor(link, titulo = '', meGusta = '', comentarios = ''){
    this.link = link;
    this.titulo = titulo;
    this.meGusta = meGusta;
    this.comentarios = comentarios;
  }
}

let generarTarjetasHistoria;
let guardandoHistoria = [
  new tarjeta('./imagenes/historia_estudiantes.jpg', 'Estudiantes'),
  new tarjeta('./imagenes/historia_codicon.jpg', 'Codicon'),
  new tarjeta('./imagenes/historia_resenhas.jpg', 'Reseña'),
  new tarjeta('./imagenes/historia_promociones.jpg', 'Promociones'),
  new tarjeta('./imagenes/historia_videos.jpg', 'Videos'),
  new tarjeta('./imagenes/historia_desarrolloweb.jpg', 'Desarrollo web'),
  new tarjeta('./imagenes/historia_eventos.jpg', 'Eventos')
];

let generarTarjetasPost;
let guardandoPost = [
  new tarjeta('./imagenes/publicaciones/post1.jpeg', 'curso python', '30', '57'),
  new tarjeta('./imagenes/publicaciones/post2.jpeg', 'efecto tipografia', '90', '0'),
  new tarjeta('./imagenes/publicaciones/post3.jpeg', 'curso wordpress', '131', '59'),
  new tarjeta('./imagenes/publicaciones/post4.jpeg', 'software libre', '27', '0'),
  new tarjeta('./imagenes/publicaciones/post5.jpeg', 'curso disenho grafico', '776', '314'),
  new tarjeta('./imagenes/publicaciones/post6.jpeg', 'lenguajes de programacion', '40', '3'),
  new tarjeta('./imagenes/publicaciones/post7.jpeg', 'la ingenieria detras de la ia', '23', '0'),
  new tarjeta('./imagenes/publicaciones/post8.jpeg', 'descubriendo los primeros comics', '29', '0'),
  new tarjeta('./imagenes/publicaciones/post9.jpeg', 'disenhos que debes conocer', '42', '0'),
  new tarjeta('./imagenes/publicaciones/post10.jpeg', 'curso basico de photoshop', '540', '130'),
  new tarjeta('./imagenes/publicaciones/post11.jpeg', 'phyton', '52', '2'),
  new tarjeta('./imagenes/publicaciones/post12.jpeg', 'programadores que debes conocer', '120', '3')
];

let generarTarjetasReels;
let guardandoReels = [
  new tarjeta('./videos/reels1.mp4','', '17', '0'),
  new tarjeta('./videos/reels2.mp4','', '41', '0'),
  new tarjeta('./videos/reels3.mp4','', '61', '0'),
  new tarjeta('./videos/reels4.mp4','', '34', '3'),
  new tarjeta('./videos/reels5.mp4','', '49', '0'),
  new tarjeta('./videos/reels6.mp4','', '77', '0')
];

function iniciar() {
  reels.style.display = 'None'
  etiquetas.style.display = 'None'
  verPost.checked = true;

  verPost.addEventListener('click', verPostFunction)
  verReels.addEventListener('click', verReelsFunction)
  verEtiquetas.addEventListener('click', verEtiquetasFunction)

  generarHistoria()
  generarPost()
  generarReels()
}

function verPostFunction() {
  post.style.display = "grid";
  reels.style.display = "none";
  etiquetas.style.display = "none";
  verPost.checked = true;
  verReels.checked = false;
  verEtiquetas.checked = false;
}

function verReelsFunction() {
  reels.style.display = "grid";
  post.style.display = "none";
  etiquetas.style.display = "none";
  verPost.checked = false;
  verReels.checked = true;
  verEtiquetas.checked = false;
}

function verEtiquetasFunction() {
  etiquetas.style.display = "grid";
  reels.style.display = "none";
  post.style.display = "none";
  verPost.checked = false;
  verReels.checked = false;
  verEtiquetas.checked = true;
}

function generarHistoria() {
  guardandoHistoria.forEach((informacion) => {
    generarTarjetasHistoria = `
      <div>
        <img src="${informacion.link}" alt="${informacion.titulo}">
          <h4>${informacion.titulo}</h4>
      </div>
    `
    historias.innerHTML += generarTarjetasHistoria;
  });
}

function generarPost() {
  guardandoPost.forEach((informacion) => {
    generarTarjetasPost = `
      <div>
        <img src="${informacion.link}" alt="${informacion.titulo}">
        <div class="hover-informacion">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            <p>${informacion.meGusta}</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
            <p>${informacion.comentarios}</p>
          </div>
        </div>
      </div>
    `
    post.innerHTML += generarTarjetasPost;
  });
}

function generarReels() {
  guardandoReels.forEach((informacion) => {
    generarTarjetasReels = `
      <div>
        <video id="myVideo" src="${informacion.link}" width="100%"></video>
        <div class="hover-informacion">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            <p>${informacion.meGusta}</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
            <p>${informacion.comentarios}</p>
          </div>
        </div>
      </div>
    `
    reels.innerHTML += generarTarjetasReels;
  });
}

window.addEventListener('load', iniciar);