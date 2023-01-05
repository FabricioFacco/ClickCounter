let clk = localStorage.getItem('cliques')

if (clk > 0) document.getElementById('contador').innerHTML = clk

let cliques = 0;

function contarCliques() {
    // Recupera o valor dos cliques armazenados no armazenamento local
    cliques = parseInt(localStorage.getItem('cliques')) || 0;
    
    cliques++;
    document.getElementById('contador').innerHTML = cliques;

    // Armazena o valor dos cliques no armazenamento local
    localStorage.setItem('cliques', cliques);
}

// Adiciona um event listener no botão para contabilizar o clique
document.getElementById('botao').addEventListener('click', contarCliques);

function resetarCliques() {
    cliques = 0;
    document.getElementById('contador').innerHTML = cliques;
    localStorage.removeItem('cliques');
}

document.getElementById('reset').addEventListener('click', resetarCliques);