
// Quando passamos uma função , como argumento de outra função...
// ...e ela é chamada de pois da execução da função principal , damos o nome de CallBack
$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
        //Aqui estou selecionando o botão que está no Header, que irá fazer a função de expandir o formulário

    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
        //Aqui estou pegando um iD # do botão que irá cancelar o chamado do SlideDown , fazendo
        //o inverso , o slideUp
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
                Ver imagem em tamanho real
             </a>
        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1250)
        $('#endereco-imagem-nova').val('')
    } )
})

