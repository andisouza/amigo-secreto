let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
    amigos.push(nome);
    limparCampo();
    atualizarLista();
    }
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
}
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceAleatorio];

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${nomeSorteado}</li>`;
    }
}