# Food Product Explorer

## 1. Project Overview

Food Product Explorer is a React and TypeScript web application that displays products from the public DummyJSON API.

The application provides a responsive food product list, title search, category and rating filters, food product details, loading and error states, retry handling, and not-found handling.

## 2. Technologies Used

- React
- TypeScript
- Vite
- React Router
- Fetch API
- Plain CSS
- DummyJSON API

## 3. Installation Instructions

Prerequisites:

- Node.js 20.19 or newer
- npm
- Git

Clone the repository:

```bash
git clone <your-repo-url>
cd food-product-explorer
npm install
```

## 4. How to Run the Application

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

Run the production build:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## 5. API Details

The application uses the public DummyJSON Products API.

| Purpose | Endpoint |
|---|---|
| Get all products | `https://dummyjson.com/products?limit=0` |
| Get one product | `https://dummyjson.com/products/:id` |

The `limit=0` query requests all available products. The application then keeps only products whose DummyJSON category is `groceries`, so the UI contains food/grocery products rather than makeup, electronics, vehicles, or other categories.

If a requested product ID does not exist, or if the ID belongs to a non-food category, the application treats it as unavailable for this food explorer and shows "Product not found.".

## 6. Project Structure

```text
src/
├── components/   Reusable UI components
├── hooks/        API-related React hooks and state
├── pages/        Components for application routes
├── routes/       React Router configuration
├── services/     API communication
├── types/        TypeScript interfaces
└── utils/        Pure formatting and filtering helpers
```

## 7. Design Decisions

### Search approach

Search is performed on the client after all products are fetched.

The title is converted to lowercase and compared with the user's search text using `includes()`. This keeps the search simple and avoids making a network request for every keystroke.

The trade-off is that the application downloads the complete product list initially.

### Custom hooks and service layer

The service layer is the only part of the application that calls `fetch()`.

The custom hooks manage loading, error, retry, and request cancellation. This keeps API logic separate from page and UI components.

### Product not found vs other errors

The API service uses an `ApiError` class that stores the HTTP status code.

The product hook checks for status `404` and shows "Product not found." Other failures show an error message with a Retry button.

### Optional brand

The `brand` property is optional because the API can return products without a brand value.

The details page handles this with:

```ts
product.brand ?? "Not specified"
```

### Responsive design

The product grid uses CSS Grid with `auto-fill` and `minmax()`.

The product details page uses one column on smaller screens and two columns on wider screens.

## 8. Known Limitations

- There is no pagination.
- Search and filters are not saved in the URL.
- There is no authentication.
- The application depends on the availability of the public DummyJSON API.
- No automated application tests were added.
