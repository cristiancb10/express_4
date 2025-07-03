import express from 'express';
import sequelize from './sequelize.js';
import rutas from './routes/api.js';

const app = express();

app.use(express.json());
app.use('/api', rutas);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Conectado a la base de datos');
        app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
    })
    .catch(err => console.error('Error al conectar a la base de datos:', err));