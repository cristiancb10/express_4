import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Producto = sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creado_en:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    actualizado_en: {              
        type: DataTypes.DATE,
        allowNull: true
    },
    eliminado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'productos',
    timestamps: false
});

Producto.beforeUpdate((producto, options) => {
    producto.actualizado_en = new Date();
});

export default Producto;