function switchLanguage(language) {
    const elements = document.querySelectorAll('.text-content [class]');

    // Primeiro, remova a classe de animação para todos os elementos
    elements.forEach((element) => {
        element.classList.remove('animate-text');
        element.classList.add('hidden-text');
    });

    // Após o timeout, atualize os textos e reaplique a classe de animação
    setTimeout(() => {
        elements.forEach((element) => {
            const className = element.className.split(' ')[0]; 
            if (languages[language][className]) {
                element.innerHTML = languages[language][className];
            }
            element.classList.remove('hidden-text');
            element.classList.add('animate-text');
        });            
    }, 500);
}

// Define o idioma padrão ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});