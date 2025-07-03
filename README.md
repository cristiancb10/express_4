## express_4

API RESTful para gestión de productos usando Express y Sequelize con soporte para MySQL y PostgreSQL.

## Características

* CRUD de productos con campos: id, nombre, precio, stock, creado_en, actualizado_en, eliminado (soft delete).

* Modelos compatibles con MySQL y PostgreSQL.

* Uso de ESModules (import/export).

* Controladores con manejo de errores y validaciones básicas.

* Rutas organizadas bajo prefijo /api.

## Instalación
Clonar el repositorio:

```bash
Copiar
Editar
git clone <tu-repo-url>
cd express_4
Instalar dependencias:
```

bash
Copiar
Editar
npm install
Configurar la base de datos en db.config.js:

js
Copiar
Editar
const config = {
  HOST: "localhost",
  USER: "tu_usuario",
  PASSWORD: "tu_contraseña",
  DB: "nombre_base_datos",
  DIALECT: "mysql" // o "postgres"
};
export default config;
Ejecutar la aplicación:

```bash
Copiar
Editar
npm run dev
El servidor correrá en http://localhost:3000.
```

## Endpoints principales

Método	Ruta	Descripción

GET	/api/productos	Listar todos los productos no eliminados

GET	/api/productos/:id	Obtener producto por ID

POST	/api/productos	Crear un nuevo producto

PUT	/api/productos/:id	Actualizar producto por ID

DELETE	/api/productos/:id	Eliminar (soft delete) producto

## Modelo Producto

Campo	Tipo	Descripción

id	Integer	Identificador único

nombre	String	Nombre del producto

precio	Float	Precio del producto

stock	Integer	Cantidad en inventario

creado_en	Date	Fecha de creación (automático)

actualizado_en	Date	Fecha de última actualización

eliminado	Boolean	Indica si el producto está eliminado (soft delete)

# Notas
El campo actualizado_en se actualiza automáticamente con un hook antes de actualizar un producto.

La sincronización con la base de datos se realiza con sequelize.sync({ alter: true }) para mantener el esquema actualizado.

Asegúrate de tener instalado y corriendo MySQL o PostgreSQL según la configuración.

Comandos útiles
Ejecutar servidor:

```bash
Copiar
Editar
npm run start
Ejecutar servidor en modo desarrollo (con nodemon):
```

```bash
Copiar
Editar
npm run dev
```

## Enlace de Git Hub


Cristian Coca Bejarano
