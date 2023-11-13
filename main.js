$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $("#resetar").click(function(){
        $("form").slideUp()
    });
    
    $("form").on('submit', function(e){
        e.preventDefault();
        
        const endNovaImg = $('#end-img-nova').val();
        const itemNovo = $('<li style="display:none;"></li>');
        $(`<img src="${endNovaImg}"/>`).appendTo(itemNovo);
        $(`<div class="overlay-img-link">
        <a href="${endNovaImg}" target="_blank" title="Ver a imagem em tamanho real">
            Ver a imagem em tamanho real
        </a>
        </div>`).appendTo(itemNovo);
        $(itemNovo).appendTo("ul")
        $(itemNovo).fadeIn(1000)
        $("input").val("");


    })
})