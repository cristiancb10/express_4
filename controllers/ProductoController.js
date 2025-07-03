import Producto from '../models/Producto.js';

const ProductoController = {
    async listar(req, res) {
        try{
            const productos = await Producto.findAll({
                where: { eliminado: false },
                order: [['id', 'ASC']],
            });
            res.json(productos);
        } catch (err) {
            res.status(500).json({ error: 'Error al listar productos' });
        }
    },

    async crear(req, res){
        try{
            const{nombre, precio, stock } = req.body;

            const producto = await Producto.create({
                nombre,
                precio,
                stock,
            });

            res.status(201).json(producto);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear el producto' });
        }
    },

    async obtener(req, res) {
        try{
            const producto = await Producto.findOne({
                where: { id: req.params.id, eliminado:false }
            });

            if(!producto){
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.json(producto);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener el producto' });
        }
    },

    async actualizar(req, res){
        try{
            const producto = await Producto.findOne({
                where: { id: req.params.id, eliminado: false }
            });

            if (!producto){
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            const { nombre, precio, stock } = req.body;

            await producto.update({
                nombre: nombre ?? producto.nombre,
                precio: precio ?? producto.precio,
                stock: stock ?? producto.stock
            });

            res.json(producto);
        } catch (err) {
            res.status(500).json({ error: 'Error al actualizar el producto' });
        }
    },

    async eliminar(req, res){
        try {
            const producto = await Producto.findOne({
                where: { id: req.params.id, eliminado: false }
            });

            if(!producto){
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            await producto.update({ eliminado: true });

            res.json({ mensaje: 'Producto eliminado exitosamente' });
        } catch (err) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
};

export default ProductoController;