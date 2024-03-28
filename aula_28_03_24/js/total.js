var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");

$input_quantidade.oninput = function() {
    var preco = document.querySelector("#preco").textContent;

    console.log(preco)
}   