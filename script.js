let total = 0;

function comprarProduto(preco) {
    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}