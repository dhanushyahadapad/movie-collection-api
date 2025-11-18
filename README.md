Movie Collection Display API
1. About the Collection

This movie collection includes a blend of classic films and modern hits, chosen to represent a variety of genres and styles. The movies were selected to give users a simple but enjoyable browsing experience. The goal is to display a balanced set of films that highlight drama, action, comedy, sci-fi, and timeless classics.

2. Project Description

This project is a simple Movie Collection Display API built using Node.js and Express.js.
It provides three API endpoints for fetching movie data and includes a small frontend built with HTML, CSS, and JavaScript to display these movies.
Users can view all movies, classic movies, and genres directly from the browser.

3. Genres Available

Drama

Crime

Sci-Fi

Action

Comedy

4. Project Structure
movie-collection-api/
├─ public/
│  ├─ index.html
│  ├─ main.js
│  └─ styles.css
├─ data/
│  └─ movies.js
├─ server.js
├─ package.json
├─ .gitignore
└─ README.md

5. API Documentation
1. GET /movies

Method: GET
Description: Returns all movies in the collection.
Sample Response:

[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]

2. GET /movies/classics

Method: GET
Description: Returns only classic movies (movies released before 2000 or marked as classic).
Sample Response:

[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]

3. GET /movies/genres

Method: GET
Description: Returns all unique genres along with the number of movies in each genre.
Sample Response:

{
  "genres": [
    { "name": "Drama", "movieCount": 2 },
    { "name": "Action", "movieCount": 1 }
  ]
}

6. Installation & Setup Instructions
1. Clone the repository
git clone <your-repo-link>

2. Navigate to the project folder
cd movie-collection-api

3. Install dependencies
npm install

4. Start the server
npm start

5. Access the frontend

Open your browser and go to:

http://localhost:3000

6. Access API endpoints directly

http://localhost:3000/movies

http://localhost:3000/movies/classics

http://localhost:3000/movies/genres

7. Features

Three API endpoints for movies, classics, and genres

A simple and clean HTML page to browse the movie collection

Classic movies have a special visual label

Uses only in-memory data (no database required)

Lightweight and easy to run

8. GitHub Repository Link

https://github.com/dhanushyahadapad/movie-collection-api.git

9. Author Information

Dhanushya