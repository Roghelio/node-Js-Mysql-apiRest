import { Router } from "express";
import { getClientes, getCliente, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.controller.js";

const router = Router();

// Obtener todos los clientes
router.get('/users', getClientes);
// Obtener un cliente en especifico
router.get('/users/:id', getCliente)
// Crear un cliente nuevo
router.post('/users', createCliente);
// Actualizar un cliente
router.patch('/users/:id', updateCliente);
// Eliminar un cliente
router.delete('/users/:id', deleteCliente);

export default router;