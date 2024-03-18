document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('click', function() {
        const img = this;
        const rect = img.getBoundingClientRect();
        const offsetX = (window.innerWidth - rect.width) / 2 - rect.left;
        const offsetY = (window.innerHeight - rect.height) / 2 - rect.top;

        // Remover a expansão e o zoom de todas as imagens
        document.querySelectorAll('.foto.expanded').forEach(expandedImg => {
            if (expandedImg !== img) {
                expandedImg.style.transform = '';
                expandedImg.classList.remove('expanded');
                expandedImg.style.zIndex = ''; 
            }
        });

        // Aplicar a expansão e centralização à imagem clicada
        if (!img.classList.contains('expanded')) {
            img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.5)`;
            img.classList.add('expanded');
            img.style.zIndex = 2; 
            document.querySelector('.overlay').classList.add('active');
        } else {
            img.style.transform = '';
            img.classList.remove('expanded');
            img.style.zIndex = '';
            document.querySelector('.overlay').classList.remove('active');
        }
    });
});

document.querySelector('.overlay').addEventListener('click', function() {
    // Remover a expansão e o zoom de todas as imagens
    document.querySelectorAll('.foto.expanded').forEach(img => {
        img.style.transform = '';
        img.classList.remove('expanded');
        img.style.zIndex = '';
    });
    // Desativar a sobreposição apenas se nenhuma imagem estiver expandida
    if (!document.querySelector('.foto.expanded')) {
        this.classList.remove('active');
    }
});