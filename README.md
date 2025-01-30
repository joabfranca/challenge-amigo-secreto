
# Sorteio de Amigo Secreto

Este é um simples sistema de sorteio de amigo secreto. O código permite adicionar nomes à lista e, em seguida, sortear aleatoriamente um nome para o amigo secreto.

## Funcionalidades

- **Adicionar Amigos**: Insira o nome de um amigo na lista de amigos secretos.
- **Sortear Amigo Secreto**: Sorteia um amigo aleatório da lista para você.
- **Validações**: Impede a inserção de nomes vazios ou duplicados.
- **Limpar Campo**: Após a inserção de um nome, o campo é limpo automaticamente.

## Como Usar

1. Abra o arquivo HTML em um navegador.
2. Adicione o nome do amigo no campo de texto.
3. Clique no botão "Adicionar Amigo" ou pressione a tecla **Enter** para adicionar à lista.
4. Clique no botão "Sortear Amigo" para sortear um amigo secreto da lista.

## Código

```javascript
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

    }
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

````

## Tecnologias Usadas

- JavaScript: Utilizado para manipulação de dados e interação com o DOM.
- HTML: Para estrutura da página web.
- CSS: (Opcional) Para estilizar os elementos da página.

## Video demonstrativo

![Demonstrativo](video_demonstrativo.gif)



## Licença

Este projeto é licenciado sob a Licença MIT. Veja abaixo os termos:

MIT License

Copyright (c) [2025] [Joab Sousa]

Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e arquivos de documentação associados (o "Software"), para lidar no Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e para permitir que as pessoas a quem o Software é fornecido faça o mesmo, sujeitas às seguintes condições:

A permissão acima deve ser incluída em todas as cópias ou partes substanciais do Software.

O Software é fornecido "como está", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando a, garantias de comercialização, adequação a um fim específico e não violação. Em nenhum caso os autores ou detentores dos direitos autorais serão responsáveis por qualquer reclamação, danos ou outra responsabilidade, seja em uma ação de contrato, delito ou outro, decorrente de, fora de ou em conexão com o Software ou o uso ou outros negócios no Software.
