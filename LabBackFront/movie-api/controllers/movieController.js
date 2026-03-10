const pool = require('../db');


exports.getAllMovies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movie ORDER BY title');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};


exports.getMovieById = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM movie WHERE id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener la película:', error);
    res.status(500).json({ error: 'Error al obtener la película' });
  }
};


exports.createMovie = async (req, res) => {
  const { title, director, year, genre, rating } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO movie (title, director, year, genre, rating)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, director, year, genre, rating]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear la película:', error);
    res.status(500).json({ error: 'Error al crear la película' });
  }
};


exports.updateMovie = async (req, res) => {
  const { title, director, year, genre, rating } = req.body;
  const movieId = req.params.id;

  if (!title) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  try {
    const result = await pool.query(
      `UPDATE movie
       SET title=$1, director=$2, year=$3, genre=$4, rating=$5
       WHERE id=$6 RETURNING *`,
      [title, director, year, genre, rating, movieId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar la película:', error);
    res.status(500).json({ error: 'Error al actualizar la película' });
  }
};


exports.deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  try {
    const result = await pool.query(
      'DELETE FROM movie WHERE id = $1 RETURNING *',
      [movieId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json({ message: 'Película eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la película:', error);
    res.status(500).json({ error: 'Error al eliminar la película' });
  }
};