

var input = document.querySelector('#a');
var submit = document.querySelector('.btn-default');
var inn = document.querySelector('#b')
var arr =[];
submit.onclick = function () {
    var n=Number(input.value); 
    arr.push(n);
    arr.sort(function(a, b){return b - a});
    inn.innerHTML=arr[0];
}







