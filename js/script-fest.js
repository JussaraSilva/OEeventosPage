// Gerenciamento de Paginação
let currentPage = 1;
const itemsPerPage = 4; // Número de imagens por página
const gallery = document.getElementById('gallery');
const images = [...gallery.children];
const totalPages = Math.ceil(images.length / itemsPerPage);

function renderPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Esconde todas as imagens
    images.forEach((img, index) => {
        img.style.display = index >= start && index < end ? 'block' : 'none';
    });

    // Atualiza o indicador de página
    document.getElementById('page-indicator').textContent = page;
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage > 0 && newPage <= totalPages) {
        currentPage = newPage;
        renderPage(currentPage);
    }
}

// Inicializa a primeira página
renderPage(currentPage);
