import { pool } from "../db.js";

// Obtener lista de clientes
export const getClientes = async (req, res) => {
    try {
        // Lanzar un error - testing manejo de errores
        //throw new Error('DB Error');

        const [result] = await pool.query('SELECT * FROM cliente');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            msg: 'Something goes wrong...'
        });
    }
};

// Obtener datos de un cliente en especifico
export const getCliente = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cliente WHERE id=?', [req.params.id]);
        if (result.length <= 0) return res.status(404).json({ msg: 'Client not exists...' });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            msg: 'Something goes wrong...'
        });
    }
}

// Crear nuevo cliente/registro
export const createCliente = async (req, res) => {
    try {
        const { name, email, telefono } = req.body;
        const [rows] = await pool.query('INSERT INTO cliente (name, email, telefono) VALUES (? , ?, ?)', [name, email, telefono]);
        console.log(req.body);
        //res.send('Texto de prueba');
        res.send({
            id: rows.insertId,
            name,
            email,
            telefono
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Something goes wrong...'
        });
    }
};

// Actualizar registro
export const updateCliente = async (req, res) => {
    try {
        const { name, email, telefono } = req.body;
        const [result] = await pool.query('UPDATE cliente SET name = IFNULL(?, name), email = IFNULL(?, email), telefono = IFNULL(?, telefono) WHERE  id=?', [name, email, telefono, req.params.id]);

        // Validar eliminacion de registro
        if (result.affectedRows === 0) return res.status(404).json({ msg: 'Client not exists...' });

        // Consultar / validar la actualizacion
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id=?', [req.params.id]);

        // Enviar estatus de actualizacion correcta
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            msg: 'Something goes wrong...'
        });
    }
};

// Borrar registro de cliente
export const deleteCliente = async (req, res) => {
    try {
        // Lanzar un error - testing manejo de errores
        throw new Error('Error inesperado...');

        const [result] = await pool.query('DELETE FROM cliente WHERE id=?', req.params.id);

        // Validar eliminacion de registro
        if (result.affectedRows <= 0) return res.status(404).json({ msg: 'Client not exists...' });

        // Enviar estatus de eliminacion correcta
        res.status(204).json({ msg: 'Registro eliminado correctamente...' });
    } catch (error) {
        return res.status(500).json({
            msg: 'Something goes wrong...'
        });
    }
};
