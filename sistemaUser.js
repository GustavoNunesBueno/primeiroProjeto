let nomeCadastro = document.getElementById("inputNome")
let senhaCadastro = document.getElementById("inputSenha")

let nomeLogin = document.getElementById("loginNome")
let senhaLogin = document.getElementById("loginSenha")

let nomePerfil = document.getElementById("nomeLogado")
let senhaPerfil = document.getElementById("senhaLogado")
let telefoneLogado = document.getElementById("telefoneLogado")
let gmailLogado = document.getElementById("gmailLogado")

let vetorUsers = []

    function Cadastrar(){

    let usuario = {
        username: '',
        password: '',
        phone: [],
        gmail: []
    }

    let cont = 0

        usuario.username = nomeCadastro.value
        usuario.password = senhaCadastro.value

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
   
    if(vetorUsers == null){

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        
    }else{
       
   for(i=0; i<vetorUsers.length; i++){

        if(nomeCadastro.value != vetorUsers[i].username){
           console.log(cont)
           cont++
        }
    }
}

    if(cont != vetorUsers.length){

        alert("Usuário já cadastrado")
        vetorUsers.splice(nomeCadastro, 1)

    }else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado")

    }

     LimpaInputs()

}

function LimpaInputs(){

    nomeCadastro.value = ''
    senhaCadastro.value = ''

}

 function Logar(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i=0; i < vetorUsers.length;i++){

        if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){

            userLogado = nomeLogin.value
            senhaLogado = senhaLogin.value
            localStorage.setItem('userLogado', JSON.stringify(userLogado))
            localStorage.setItem('senhaLogado', JSON.stringify(senhaLogado))
            window.location.href = "perfilUser.html"

        }if(nomeLogin.value != vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){

            document.getElementById('loginErro').innerHTML = 'Usuário não existe'

        }if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value != vetorUsers[i].password){

            document.getElementById('loginErro').innerHTML = 'Senha Inválida'
        }
    }
}

function CarregarUser(){

       userLogado = JSON.parse(localStorage.getItem('userLogado'))
       senhaLogado = JSON.parse(localStorage.getItem('senhaLogado'))
       document.getElementById("Olar").innerHTML = `Seja bem-vindo, ${userLogado}.`
       nomePerfil.value = userLogado
       senhaPerfil.value = senhaLogado

}

function CadastrarTelefone(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    let cont = 0

    for(i=0; i < vetorUsers.length; i++){

        if(userLogado == vetorUsers[i].username){

            vetorUsers[i].phone.push(telefoneLogado.value)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("telefone cadastrado")

        }else{

            cont++

        }
    }

    if(cont == vetorUsers.length){

        alert('abuble')

    }
}

function CadastrarGmail(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    let cont = 0

    for(i=0; i < vetorUsers.length; i++){

        if(userLogado == vetorUsers[i].username){

            vetorUsers[i].gmail.push(gmailLogado.value)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Gmail cadastrado")

        }else{

            cont++

        }
    }

    if(cont == vetorUsers.length){

        alert('abuble')

    }
}

