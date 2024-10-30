const items = document.querySelectorAll('.text-overlay');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        items.forEach(i => i.classList.remove('active'));
        
        // Adiciona a classe 'active' ao item clicado
        item.classList.add('active');
    });
});
