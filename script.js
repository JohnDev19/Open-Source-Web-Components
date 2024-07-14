document.addEventListener('DOMContentLoaded', function() {
            AOS.init();

            const menuIcon = document.querySelector('.menu-icon');
            const navOverlay = document.querySelector('.nav-overlay');
            const navLinks = document.querySelectorAll('.nav-menu a');

            menuIcon.addEventListener('click', function() {
                this.classList.toggle('active');
                navOverlay.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuIcon.classList.remove('active');
                    navOverlay.classList.remove('active');
                });
            });

            const searchInput = document.querySelector('.search-bar input');
            const searchButton = document.querySelector('.search-bar button');
            const componentCards = document.querySelectorAll('.component-card');
            const noResults = document.getElementById('no-results');

            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase();
                let resultsFound = false;

                componentCards.forEach(card => {
                    const cardText = card.textContent.toLowerCase();
                    if (cardText.includes(searchTerm)) {
                        card.style.display = 'block';
                        resultsFound = true;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (resultsFound) {
                    noResults.style.display = 'none';
                } else {
                    noResults.style.display = 'block';
                }
            }

            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    performSearch();
                }
            });
        });