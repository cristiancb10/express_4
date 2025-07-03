import express from 'express';

import ProductoController from '../controllers/ProductoController.js';

const router = express.Router();

router.get('/productos', ProductoController.listar);
router.post('/productos', ProductoController.crear);
router.get('/productos/:id', ProductoController.obtener);
router.put('/productos/:id', ProductoController.actualizar);
router.delete('/productos/:id', ProductoController.eliminar);

export default router;