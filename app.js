// Document Object Model (DOM) JUST IN TIME (JIT)
/* 

.getElementById(id) => Element || null
.getElementsByClassName(class) => Array[Element] || []
.getElementsByName(name) => Array[Element] || []
.getElementsByTagName(tag) => Array[Element] || []

*/

let divContenido = document.getElementById('contenido');
// divContenido => HTMLDivElement

let listas = document.getElementsByClassName('lista');
// listas => [HTMLUlElement, HTMLUlElement]

let generos = document.getElementsByName('genero');
// generos => [HTMLInputElement, HTMLInputElement]

let lis = document.getElementsByTagName('li');
// lis => [HTMLLiElement, HTMLLiElement, ...]


/* 

.querySelector(selector) => Element || null
.querySelectorAll(selector) => Array || []

*/

let divContenidoQS = document.querySelector('#contenido');
// divContenidoQS => HTMLDivElement

let listasQSA = document.querySelectorAll('.lista');
// listasQSA => [HTMLUlElement, HTMLUlElement]

let generosQSA = document.querySelectorAll('input[name=genero]');
// generosQSA => [HTMLInputElement, HTMLInputElement]

let lisQSA = document.querySelectorAll('li');
// lisQSA => [HTMLLiElement, HTMLLiElement, ...]


/* 

.createElement(tag) => HTMLTagElement
.createComment(text) => <!-- text -->
.createTextNode(text) => HTMLNode 
.cloneNode(deep) => HTMLElement

*/

const divContentCE = document.createElement('h5');
// divContentCE => HTMLDivElement

const comment = document.createComment('Hola Mundo');
// comment => <!--Hola Mundo-->

const text = document.createTextNode('Hola Mundo');
// text => Hola Mundo

const p1 = document.createElement('p');
p1.textContent = "Hola Mundo 1";

/* const p2 = document.createElement('p');
p2.textContent = "Hola Mundo 1"; */

const p2 = divContenido.cloneNode(true);
p2.id = "contenido2"
p2.appendChild(comment)
//p2.textContent = "Hola Mundo 2";

let newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('C#'))
listasQSA[1].appendChild(newLi);


p2.className = "hola"
p2.classList.add('Hola')
p2.style.fontSize= "20px";

document.body.appendChild(p2);

let ulResult = document.createElement('ul')
ulResult.classList.add('resultado');

for(let i = -8; i < 10; i+=2){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(i))
    ulResult.appendChild(li);
}

document.body.appendChild(ulResult);