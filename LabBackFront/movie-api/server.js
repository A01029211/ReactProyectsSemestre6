const express     = require('express');
const cors        = require('cors');
const dotenv      = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('API de Películas funcionando con PostgreSQL');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});