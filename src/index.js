import app from './app.js';
import { PORT } from './config.js';

// Poner a la escucha un puerto
app.listen(PORT, () => {
    console.log('Servidor escuchando en puerto ', PORT);
});