// ========= Verifica se o login e senha são válidos ===========
function verificaLogin() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#input-senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const myBtn = document.querySelector('#btn-login');
myBtn.addEventListener('click', verificaLogin);

// ============ Verifica se o check está marcado =============
const button = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');
function desabilitaBotao() {
  button.setAttribute('disabled', 'disabled');
}

function habilitaBotao() {
  button.removeAttribute('disabled');
}

function verificaCheck() {
  if (check.checked) {
    habilitaBotao();
  } else {
    desabilitaBotao();
  }
}
check.addEventListener('click', verificaCheck);

// ========== Contador da text area ========
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const teste = counter.innerHTML;

function contador() {
  const valor = teste - textArea.value.length;
  counter.innerHTML = valor;
}
textArea.addEventListener('input', contador);

// ========== Form preenchido ========
const materia = [];
let nome = document.querySelector('#input-name');
let sobrenome = document.querySelector('#input-lastname');
let email = document.querySelector('#input-email');
let casa = document.querySelector('#house');
let familia = document.querySelector('input[name=family]:checked');
let nota = document.querySelector('input[name=rate]:checked');
let observacao = document.querySelector('#textarea');
document.querySelectorAll('input[class=subject]:checked').forEach((element) => {
  materia.push(element.value);
});
let materiaString = '';
function attInfo() {
  nome = document.querySelector('#input-name');
  sobrenome = document.querySelector('#input-lastname');
  email = document.querySelector('#input-email');
  casa = document.querySelector('#house');
  familia = document.querySelector('input[name=family]:checked');
  nota = document.querySelector('input[name=rate]:checked');
  observacao = document.querySelector('#textarea');
  document.querySelectorAll('input[class=subject]:checked').forEach((element) => {
    materia.push(element.value);
  });
}

function catchMateria() {
  materia.forEach((element) => {
    if (materiaString === '') {
      materiaString = `${element}`;
    } else if (materiaString.indexOf) {
      materiaString = `${materiaString}, ${element}`;
    }
  });
}

function criaObjeto(event) {
  event.preventDefault();
  attInfo();
  catchMateria();
  const paragrafo = document.getElementById('infos');
  paragrafo.innerHTML = `Nome: ${nome.value} ${sobrenome.value};<br>
  Email: ${email.value};<br>
  Casa: ${casa.value};<br>
  Família: ${familia.value};<br>
  Avaliação: ${nota.value};<br>
  Observações: ${observacao.value};<br>
  Matérias: ${materiaString}.`;
}
button.addEventListener('click', criaObjeto);
