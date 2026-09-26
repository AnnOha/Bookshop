const BOOKS = Array.isArray(window.books) ? window.books : [];

function createBookSpine(book) {
    const button = document.createElement('button');
    const title = book.title || 'Untitled Book';

    button.type = 'button';
    button.className = 'book-card';
    button.setAttribute('data-id', String(book.id));
    button.setAttribute('aria-label', `Open details for ${title}`);
    button.innerHTML = `<span class="book-spine-text">${title}</span>`;
    button.addEventListener('click', () => openBookModal(book));

    return button;
}

function renderBookList() {
    const bookListContainer = document.getElementById('book-list');

    if (!bookListContainer || !BOOKS.length) {
        return;
    }

    bookListContainer.innerHTML = '';

    BOOKS.forEach((book) => {
        const bookSpine = createBookSpine(book);
        bookListContainer.appendChild(bookSpine);
    });
}

function updateModalContent(book) {
    const modalCover = document.getElementById('modal-cover');
    const modalCoverFallback = document.getElementById('modal-cover-fallback');
    const modalCoverTitle = document.getElementById('modal-cover-title');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const modalTropesHeading = document.getElementById('modal-tropes-heading');
    const modalTropes = document.getElementById('modal-tropes');
    const modalReviews = document.getElementById('modal-reviews');
    const goodreadsLink = document.getElementById('goodreads-link');

    if (!modalCover || !modalCoverFallback || !modalCoverTitle || !modalCategory || !modalTitle || !modalAuthor || !modalPrice ||
        !modalDescription || !modalTropesHeading || !modalTropes || !modalReviews || !goodreadsLink) {
        return;
    }

    const insights = window.bookInsightsByCategory[book.category];
    modalCover.hidden = false;
    modalCoverFallback.hidden = true;
    modalCover.src = book.cover;
    modalCover.alt = `${book.title} cover`;
    modalCoverTitle.textContent = book.title;
    modalCategory.textContent = book.category;
    modalTitle.textContent = book.title;
    modalAuthor.textContent = `by ${book.author}`;
    modalPrice.textContent = `€${book.price}`;
    modalDescription.textContent = book.description;
    modalTropesHeading.textContent = insights.label;
    goodreadsLink.href = `https://www.goodreads.com/search?q=${encodeURIComponent(book.title)}`;

    modalTropes.replaceChildren();
    insights.tags.forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'trope-chip';
        chip.textContent = tag;
        modalTropes.appendChild(chip);
    });

    modalReviews.replaceChildren();
    insights.notes.forEach((note) => {
        const review = document.createElement('p');
        review.className = 'reader-note';
        review.textContent = note;
        modalReviews.appendChild(review);
    });
}

function openBookModal(book) {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;

    updateModalContent(book);
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function closeBookModal() {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function attachModalEvents() {
    const modal = document.getElementById('detail-modal');
    const modalCover = document.getElementById('modal-cover');
    const modalCoverFallback = document.getElementById('modal-cover-fallback');
    const closeButton = document.querySelector('.close-modal');
    const overlay = document.querySelector('.modal-overlay');

    if (closeButton) {
        closeButton.addEventListener('click', closeBookModal);
    }

    if (overlay) {
        overlay.addEventListener('click', closeBookModal);
    }

    if (modalCover && modalCoverFallback) {
        modalCover.addEventListener('error', () => {
            modalCover.hidden = true;
            modalCoverFallback.hidden = false;
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeBookModal();
        }
    });
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    const toggleButton = document.querySelector('.theme-toggle');

    if (toggleButton) {
        toggleButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    }

    localStorage.setItem('bookshop-theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('bookshop-theme') || 'light';
    setTheme(savedTheme);

    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    }

    renderBookList();
    attachModalEvents();
});