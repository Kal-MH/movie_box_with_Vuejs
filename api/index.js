import fetch from 'node-fetch';

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  const { i, s, type, y } = req.query;
  let url = `${API_END_POINT}?apikey=${API_KEY}`;

  if (i) {
    url = `${url}&${i ? `i=${i}` : ''}`;
  } else {
    url = `${url}&s=${s}${type ? `&type=${type}` : ''}
             ${y ? `&y=${y}` : ''}`;
  }

  console.log(url);
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);
  }
}
