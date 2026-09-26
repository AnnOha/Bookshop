const BOOKS = Array.isArray(window.books) ? window.books : [];

function getBookColor(index) {
    const hue = (index * 31) % 360;
    return `linear-gradient(180deg, hsl(${hue} 35% 65%) 0%, hsl(${hue} 28% 32%) 100%)`;
}

function createBookSpine(book, index) {
    const button = document.createElement('button');
    const title = book.title || 'Untitled Book';

    button.type = 'button';
    button.className = 'book-card';
    button.setAttribute('data-id', String(book.id));
    button.setAttribute('aria-label', `Open details for ${title}`);
    button.style.background = getBookColor(index);
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

    BOOKS.forEach((book, index) => {
        const bookSpine = createBookSpine(book, index);
        bookListContainer.appendChild(bookSpine);
    });
}

function updateModalContent(book) {
    const modalCover = document.getElementById('modal-cover');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');

    if (!modalCover || !modalTitle || !modalAuthor || !modalPrice || !modalDescription) {
        return;
    }

    modalCover.src = book.cover;
    modalCover.alt = `${book.title} cover`;
    modalTitle.textContent = book.title;
    modalAuthor.textContent = `by ${book.author}`;
    modalPrice.textContent = `€${book.price}`;
    modalDescription.textContent = book.description;
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
    const closeButton = document.querySelector('.close-modal');
    const overlay = document.querySelector('.modal-overlay');

    if (closeButton) {
        closeButton.addEventListener('click', closeBookModal);
    }

    if (overlay) {
        overlay.addEventListener('click', closeBookModal);
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