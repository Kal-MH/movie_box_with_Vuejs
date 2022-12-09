import fetch from 'node-fetch';

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  const { i, s, type, y } = req.query;
  let queryString = '';

  if (i) {
    queryString = `&${i ? `i=${i}` : ''}`;
  } else {
    queryString = `&s=${s}${type ? `&type=${type}` : ''}
             ${y ? `&y=${y}` : ''}`;
  }

  const response = await fetch(
    `${API_END_POINT}?apikey=${API_KEY}${queryString}`,
  );

  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);
  }
}
