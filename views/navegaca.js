// Controle de navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar com a home ativa
    mostrarSecao('home');
    
    // Configurar links de navegação
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').replace('#', '');
            mostrarSecao(target);
        });
    });
});

function mostrarSecao(idSecao) {
    // Esconder todas as seções
    const secoes = ['home', 'competicao', 'atleta'];
    secoes.forEach(sec => {
        const elemento = document.getElementById(sec);
        if (elemento) {
            elemento.classList.remove('active');
        }
    });
    
    // Mostrar a seção selecionada
    const secaoAtiva = document.getElementById(idSecao);
    if (secaoAtiva) {
        secaoAtiva.classList.add('active');
        
        // Inicializar a seção se necessário
        if (idSecao === 'competicao') {
            // Disparar evento para inicializar competições
            const selectOpcaoCorrida = secaoAtiva.querySelector('#selectOpcaoCorrida');
            if (selectOpcaoCorrida) {
                const event = new Event('change');
                selectOpcaoCorrida.dispatchEvent(event);
            }
        } else if (idSecao === 'atleta') {
            // Disparar evento para inicializar atletas
            const selectOpcao = secaoAtiva.querySelector('#selectOpcao');
            if (selectOpcao) {
                const event = new Event('change');
                selectOpcao.dispatchEvent(event);
            }
        }
    }
}