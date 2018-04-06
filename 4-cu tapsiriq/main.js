
// var input = document.querySelector('#a');
// var submit = document.querySelector('.btn-default');

var input = document.querySelector('#a');
var submit = document.querySelector('.btn-default');

submit.onclick = function () {
    var n=input.value;
    var d = 1;
    for (i = 1; i <= 10; i++) {
        console.log(n + "*" + i + "=" + (d = n * i))
    }
 }






