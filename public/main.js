// public/main.js
const output = document.getElementById('output');
const btnAll = document.getElementById('btn-all');
const btnClassics = document.getElementById('btn-classics');
const btnGenres = document.getElementById('btn-genres');

btnAll.addEventListener('click', () => fetchAndDisplay('/movies', displayMovies));
btnClassics.addEventListener('click', () => fetchAndDisplay('/movies/classics', displayMovies));
btnGenres.addEventListener('click', () => fetchAndDisplay('/movies/genres', displayGenres));

async function fetchAndDisplay(url, renderFn) {
  output.innerHTML = 'Loading...';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderFn(data);
  } catch (err) {
    output.innerHTML = `<div class="error">Error fetching data: ${err.message}</div>`;
  }
}

function displayMovies(movies) {
  if (!Array.isArray(movies) || movies.length === 0) {
    output.innerHTML = '<p>No movies found.</p>';
    return;
  }
  output.innerHTML = '';
  movies.forEach(m => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
      <div>
        <strong>${escapeHtml(m.title)}</strong> <span class="meta">(${m.releaseYear})</span>
        <div class="meta">${escapeHtml(m.genre)} • Directed by ${escapeHtml(m.director)}</div>
      </div>
      <div>
        ${m.isClassic ? '<span class="badge">Classic</span>' : ''}
      </div>
    `;
    output.appendChild(div);
  });
}

function displayGenres(payload) {
  const list = (payload && payload.genres) || [];
  if (list.length === 0) {
    output.innerHTML = '<p>No genres found.</p>';
    return;
  }
  output.innerHTML = '';
  list.forEach(g => {
    const div = document.createElement('div');
    div.className = 'genre-item';
    div.innerHTML = `<strong>${escapeHtml(g.name)}</strong> — ${g.movieCount} movie(s)`;
    output.appendChild(div);
  });
}

// tiny escape
function escapeHtml(s) {
  if (!s) return '';
  return s.replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
  );
}
