import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';
import indexRoutes from './routes/index.routes.js';

// Crear variable de tipo express
const app = express();

// Adicionar la interpretacion de json cuando reciba json en peticiones
app.use(express.json());

// importar las rutas, adicionar /api a la ruta
app.use('/api', clientesRoutes);
app.use(indexRoutes);

// Middleware - mostrar en caso de que el usuario ingrese a una ruta que no existe
app.use((req, res) => {
    res.status(405).json({ msg: 'Endpoint not found.' });
});

export default app;