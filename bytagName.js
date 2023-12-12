var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4'
}

var header = document.querySelector('#main-header');
header.style.borderBottom=='solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'Hello World'