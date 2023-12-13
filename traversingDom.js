var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundcolor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parent Element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundcolor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundcolor='green';


// // first child
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='helle 1';


// // last child
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='helle 4';


// nextsibling
//console.log(itemList.nextSibling);

// nextElementSibling
//console.log(itemList.nextElementSibling);


// previoussibling
//console.log(itemList.previousSibling);

// previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='yellow';

var newdiv = document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title', 'hello div');
var newdivText = document.createTextNode('hello world');
newdiv.appendChild(newdivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
console.log(newdiv);
newdiv.style.fontSize='30px';