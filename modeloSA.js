

let btn = document.querySelector('#btn');
let cadastroMeio = document.querySelector('#cadastroMeio');

btn.addEventListener('click', function(){

    if(cadastroMeio.display === 'block') {

        cadastroMeio.style.display = 'none';

    }else{
        cadastroMeio.style.display = 'block';
    }


});

let btnLog = document.querySelector('#btnLog');
let logMeio = document.querySelector('#logMeio');

btnLog.addEventListener('click', function(){

    if(logMeio.style.display === 'block'){

        logMeio.style.display = 'none';

    }else{

        logMeio.style.display = 'block';

    }


});
