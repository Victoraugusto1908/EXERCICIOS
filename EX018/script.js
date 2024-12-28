document.body.addEventListener('click', function() {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    let repetitions = 0;  // Corrigido para começar de 0
    const max_repetitions = 6;  // Corrigido a digitação da variável

    function toggleFade() {
        if (repetitions < max_repetitions) {
            // Alterna entre as classes 'fade-out' e 'fade-in'
            if (h1.classList.contains('fade-out') || h2.classList.contains('fade-out')) {
                // Se estiver esmaecido, faz ele voltar
                h1.classList.remove('fade-out');
                h2.classList.remove('fade-out');
                h1.classList.add('fade-in');
                h2.classList.add('fade-in');
            } else {
                // Se não estiver esmaecido, faz ele desaparecer
                h1.classList.remove('fade-in');
                h2.classList.remove('fade-in');
                h1.classList.add('fade-out');
                h2.classList.add('fade-out');
            } 

            repetitions++;  // Aumenta o contador de repetições
        } else {
            clearInterval(fadeInterval);  // Para o intervalo após 3 repetições
        }
    }

    const fadeInterval = setInterval(toggleFade, 1000); 
});
