// Encapsulamento para evitar conflitos de escopo
(function () {
    // Menu Ativo
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
      if (item.getAttribute("href") === currentPage) {
        item.style.color = "#0d99d7"; // Texto preto
        item.style.fontWeight = "bold"; // Negrito
      }
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,  // Mostra 1 depoimento por vez
            spaceBetween: 20,  // Espaçamento entre slides
            loop: true,  // Volta ao primeiro slide quando chega ao final
            grabCursor: true,
            centeredSlides: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
    } else {
        console.error("Swiper não carregado corretamente. Verifique as dependências.");
    }
});


    // Search Clear
    const clearInput = () => {
        const input = document.querySelector(".search input[type='search']");
        if (input) {
            input.value = "";
        }
    };

    // Tornar a função acessível globalmente
    window.clearInput = clearInput;

    // Slider Página Home
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll('input[name="slider"]');
        const prevButton = document.querySelector(".slider-btn.prev");
        const nextButton = document.querySelector(".slider-btn.next");
        let currentIndex = Array.from(slides).findIndex(slide => slide.checked);

        function showSlide(index) {
            slides[index].checked = true;
            currentIndex = index;
        }

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    });

    // Página Sobre - Detalhes de Serviços
    document.addEventListener('DOMContentLoaded', function () {
        const servicos = document.querySelectorAll('.servicos_detalhes');

        servicos.forEach(servico => {
            const toggleBtn = servico.querySelector('.toggle-btn');

            toggleBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                servico.classList.toggle('open');
            });

            servico.addEventListener('click', function () {
                servico.classList.toggle('open');
            });
        });

        document.addEventListener('click', function (event) {
            servicos.forEach(servico => {
                if (!servico.contains(event.target)) {
                    servico.classList.remove('open');
                }
            });
        });
    });

    // Formulário Contato
    document.addEventListener('DOMContentLoaded', function () {
        const btnContato = document.getElementById('btnContato');
        const formContato = document.getElementById('formContato');
        const fecharForm = document.getElementById('fecharForm');

        btnContato.addEventListener('click', function () {
            formContato.style.display = 'flex';
        });

        fecharForm.addEventListener('click', function () {
            formContato.style.display = 'none';
        });

        formContato.addEventListener('click', function (event) {
            if (event.target === formContato) {
                formContato.style.display = 'none';
            }
        });
    });

    // Leia Mais
    document.addEventListener('DOMContentLoaded', function () {
        const readMoreBtn = document.querySelector('.read-more');
        const readMoreContent = document.querySelector('.read-more-content');

        readMoreBtn.addEventListener('click', () => {
            readMoreContent.classList.toggle('show-content');
            readMoreBtn.textContent = readMoreContent.classList.contains('show-content') ? "Leia Menos" : "Leia Mais";
        });
    });

    // Galeria com Paginação
    document.addEventListener('DOMContentLoaded', function () {
        let currentPage = 1;
        const itemsPerPage = 4;
        const gallery = document.getElementById('gallery');
        const images = [...gallery.children];
        const totalPages = Math.ceil(images.length / itemsPerPage);

        function renderPage(page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            images.forEach((img, index) => {
                img.style.display = index >= start && index < end ? 'block' : 'none';
            });

            document.getElementById('page-indicator').textContent = page;
        }

        function changePage(direction) {
            const newPage = currentPage + direction;
            if (newPage > 0 && newPage <= totalPages) {
                currentPage = newPage;
                renderPage(currentPage);
            }
        }

        // Expondo changePage ao escopo global
        window.changePage = changePage;

        renderPage(currentPage);

        document.querySelector('.pagination .prev').addEventListener('click', () => changePage(-1));
        document.querySelector('.pagination .next').addEventListener('click', () => changePage(1));
    });

    // Carrousel Página Serviços 

    document.addEventListener("DOMContentLoaded", () => {
        const carousels = document.querySelectorAll(".carousel");
    
        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll(".carousel-image");
            let currentIndex = 0;
    
            const showImage = index => {
                images.forEach((image, i) => {
                    image.classList.toggle("active", i === index);
                });
            };
    
            const nextImage = () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            };
    
            const prevImage = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            };
    
            // Cria os botões de navegação
            const controls = document.createElement("div");
            controls.classList.add("carousel-controls");
    
            const prevButton = document.createElement("button");
            prevButton.textContent = "❮";
            prevButton.addEventListener("click", prevImage);
    
            const nextButton = document.createElement("button");
            nextButton.textContent = "❯";
            nextButton.addEventListener("click", nextImage);
    
            controls.appendChild(prevButton);
            controls.appendChild(nextButton);
            carousel.appendChild(controls);
    
            // Mostra a primeira imagem inicialmente
            showImage(currentIndex);
        });
    });
})();
