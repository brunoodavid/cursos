function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');

    let primeiroPost = posts[0];
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName('textoPosts'); 

    console.log(textoPosts[1].classList)

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        radioMasculino.checked = true;
    } else if(genero === 'F'){
        radioFeminino.checked = true;
    }
}