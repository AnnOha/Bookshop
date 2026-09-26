# BookNook : Mini-UI-Bookshop 

A frontend-only interactive bookshop demonstration built with vanilla HTML, CSS, and JavaScript. Users can browse a list of books and view detailed information in a modal popup.

## Features

- **Book List View**: Grid display of books with cover image, title, author, and price
- **Detail Modal**: Click any book to view full details (title, author, price, description)
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Accessible**: WCAG AA compliant with keyboard navigation support

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks)

## Project Structure

├── index.html # Main HTML markup

├── data.js # Book data model

├── app.js # JavaScript logic (rendering, event listeners)

├── style.css # Styling and layout

└── README.md # This file


## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Browse the book list and click any book to view details

## Usage

**View Books**: All books render automatically on page load.

**Open Modal**: Click any book card to display full details.

**Close Modal**: 
- Click the × button in the top-right
- Click outside the modal (overlay)
- Press Escape key

## Data Structure

Books are stored as objects in `data.js`:

```javascript
{
  id: 1,
  title: "Book Title",
  author: "Author Name",
  price: 14.99,
  cover: "https://example.com/image.jpg",
  description: "Book description..."
}
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Future Enhancements

- Search/filter functionality
- Sort by price or rating
- Shopping cart (UI only)
- Backend integration
- User reviews

---
