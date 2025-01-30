let listaAmigoSecreto = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo");
    //console.log(amigo)

    if (nomeAmigo.value.trim() === "") {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (listaAmigoSecreto.includes(nomeAmigo.value.trim())) {
        alert('Este nome já foi adicionado na lista!');
        return;

    } else {
        listaAmigoSecreto.push(nomeAmigo.value.trim());
        limparCampo();
        let listaNomes = document.getElementById('listaAmigos');
        listaNomes.innerHTML = listaAmigoSecreto.join('<br>');
        console.log(listaAmigoSecreto);

    }       //OBS. REALIZAR UMA VALIDAÇÃO PARA NAO ACEITAR NUMEROS, APENAS NOME

}

function sortearAmigo() {

    if (listaAmigoSecreto.length === 0) {
        alert('Sem nomes para sortear. Insira os nomes, para realizar o sorteio.');
        return;
    }
    //Sorteia um nome aleatóriamente do array
    let sorteioNome = listaAmigoSecreto[Math.floor(Math.random() * listaAmigoSecreto.length)];
    let resultadoSorteio = document.getElementById('resultado');

    let listaNomes = document.getElementById('listaAmigos');
    //Apresenta o nome sorteado na tela
    resultadoSorteio.innerHTML = `O amigo sorteado é: ${sorteioNome}`;

}

function limparCampo() {
   let nomeAmigo = document.getElementById("amigo");
    nomeAmigo.value = "";
}
//Implementado a adição dos nomes pela tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function(eveng) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});