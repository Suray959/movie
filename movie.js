const apiKey = 'e3ce9040';
const searchBtn = document.querySelector('.submit');
const deleteBtn = document.querySelector('.delete');
const moviesList = document.querySelector('.movies-list');

async function movie(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    moviesList.innerHTML = ''; 
    data.Search.forEach(movie => {
      const title = document.createElement('p');
      title.textContent = movie.Title;
      moviesList.appendChild(title);

      const img = document.createElement('img');
      img.src = movie.Poster;
      img.alt = movie.Title;
      moviesList.appendChild(img); 
    });
  } catch (err) {
    console.log(err);
  }
}

function act(value) {
  const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`;
  movie(mov);
  console.log(mov);
}



searchBtn.addEventListener('click',  function() {
  const input = document.querySelector('.input').value;
  console.log("salam",input);
  if(input!==""){
    act(input);
  } else{
    alert('Kino adi yazin!!')
  }
 
});


deleteBtn.addEventListener('click', function() {

  moviesList.innerHTML = '';
});
