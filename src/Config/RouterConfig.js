export const tableHead = [
  { label: 'ID', key: 'id' },
  { label: 'Image', key: 'image' },
  { label: 'Title', key: 'title' },
  { label: 'Description', key: 'description' },
];

export const imdbApiBaseUrl = 'https://imdb-api.com/en/API/SearchMovie/k_z9yeskhc/';
export const imdbApiPostersUrl = 'https://imdb-api.com/en/API/Posters/k_z9yeskhc/';
export const imdbApiWikipedia = (id)=> { return 'https://imdb-api.com/en/API/Title/k_z9yeskhc/'+ id +'/Wikipedia'; }
export const imdbApiTrailer = 'https://imdb-api.com/en/API/Trailer/k_z9yeskhc/';

