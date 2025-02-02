let amigos = [];

const validacion = document.querySelector(".validacion");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  let amigoInput = document.getElementById("amigo");
  const amigo = amigoInput.value;

  if (amigo == "") {
    mostrarValidacion("Por favor, ingrese un nombre valido");
    return;
  }

  if (amigos.includes(amigo)) {
    mostrarValidacion(`El amigo ${amigo} ya existe en la lista`);
    return;
  }

  validacion.style.display = "none";

  amigos.push(amigo);
  actualizarAmigos();

  amigoInput.value = "";
  resultado.style.display = "none";
}

function actualizarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    mostrarValidacion("Debes agregar al menos 2 amigos");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigo = amigos[indice];

  resultado.style.display = "block";
  resultado.innerHTML = `El amigo secreto sorteado es: ${amigo}`;

  amigos = [];
  actualizarAmigos();
}

function mostrarValidacion(mensaje) {
  validacion.innerHTML = mensaje;
  validacion.style.display = "block";

  const resultado = document.getElementById("resultado");
  resultado.style.display = "none";
}
