import fetch from 'node-fetch';

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  const { imdbID, title, type, year } = req.query;
  let url = `${API_END_POINT}?apikey=${API_KEY}`;

  if (imdbID) {
    url = `${url}&${imdbID ? `i=${imdbID}` : ''}`;
  } else {
    url = `${url}&s=${title}${type ? `&type=${type}` : ''}
             ${year ? `&y=${year}` : ''}`;
  }

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);
  }
}
