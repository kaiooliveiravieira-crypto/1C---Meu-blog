    const botoes = document.querySelectorAll("button");
    
    botoes.forEach(botao => {
        botao.addEventListener("click", botaoClicado);
    });
    
    function botaoClicado(event) {
        let texto = event.currentTarget.querySelector("span");
        texto.textContent++;
    }