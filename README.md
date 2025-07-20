# Game Hub

Game Hub is a modern web application that allows users to discover and explore video games. Built with React and TypeScript, it provides a responsive and interactive interface for browsing games by genre, platform, and more.

## Features

- **Browse Games**: Explore a vast collection of games with infinite scrolling
- **Search Functionality**: Find specific games by title
- **Filter by Genre**: Browse games by different genres
- **Filter by Platform**: Filter games by gaming platforms (PC, PlayStation, Xbox, etc.)
- **Sort Options**: Sort games by different criteria
- **Game Details**: View detailed information about each game, including:
  - Description
  - Platforms
  - Publishers
  - Screenshots
  - Trailers
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Optimized for various screen sizes

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **React Router**: For navigation and routing
- **Chakra UI**: Component library for building accessible and responsive UI
- **Zustand**: State management
- **React Query**: Data fetching and caching
- **Axios**: HTTP client for API requests
- **Vite**: Build tool and development server
- **RAWG API**: Video game database API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Bun package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   bun install
   ```

3. Create a `.env` file in the root directory and add your RAWG API key
   ```
   VITE_RAWG_API=your_api_key_here
   ```
   You can get an API key from [RAWG](https://rawg.io/apidocs)

4. Start the development server
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
bun run build
```

## Project Structure

- `src/assets`: Static assets like images
- `src/components`: Reusable UI components
- `src/hooks`: Custom React hooks
- `src/interfaces`: TypeScript interfaces
- `src/pages`: Page components
- `src/services`: API and utility services
- `src/store.ts`: Zustand store for state management

## Key Features Explained

### Game Filtering and Sorting

The application uses a combination of Zustand for state management and React Query for data fetching. The game query parameters (genre, platform, sort order, search text) are stored in the Zustand store and used by the React Query hooks to fetch filtered data from the RAWG API.

### Infinite Scrolling

The game list implements infinite scrolling using React Query's `useInfiniteQuery` hook, allowing users to load more games as they scroll down the page.

### Responsive Design

The application is fully responsive, with different layouts for mobile, tablet, and desktop screens. The genre list is hidden on mobile screens to save space, and the game cards adjust their size based on the screen width.

### Dark/Light Mode

Users can toggle between dark and light themes using the switch in the navigation bar. The theme preference is stored and persisted across sessions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [RAWG API](https://rawg.io/apidocs) for providing the game data
- [Chakra UI](https://chakra-ui.com/) for the UI components
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set
