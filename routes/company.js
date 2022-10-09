const router = require('express').Router();
const {
    createCompany,
    getCompanys,
    getCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company.js');
const auth = require('../config/auth.js');

/**
 * @swagger
 * /company/:
 *  get:
 *      tags: 
 *        -  company
 *          
 *      summary: Empresas disponibles.
 *      description: Entrega una lista de empresas.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Todas las empresas disponibles.
 *              type: json.
 */
router.get('/', auth.optional, getCompanys);
/**
 * @swagger
 * /company/{id}:
 *  get:  
 *      tags: 
 *        -  company
 *      summary: Empresa disponible.
 *      description: Entrega empresa por ID. Necesita autentificación.
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID de la empresa que desea obtener
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Empresa disponible.
 *              type: json.
 *          400: 
 *              description: ID invalida.
 *              type: json
 *          404:
 *               description: Empresa no encontrada.
 *               type: json.
 */
router.get('/:id', auth.required, getCompany);

/**
 * @swagger
 * /company/:
 *  post:
 *      tags: 
 *        -  company
 *      summary: Crear empresa.
 *      description: Agrega una nueva empresa. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: name
 *            name: nombre
 *            description: Nombre de la empresa, Escribir en minúsculas.
 *          - in: description
 *            name: description
 *            description: Descripcion de la empresa, Escribir en minúsculas.
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: Creado correctamente.
 *              type: json.
 *          401: 
 *              description: Sin login.
 *              type: json
 *          403:
 *               description: No tienes permisos.
 *               type: json.
 */
router.post('/', auth.required, createCompany);
/**
 * @swagger
 * /company/{id}:
 *  patch:
 *      tags: 
 *        -  company
 *      summary: Actualizar empresa.
 *      description: Actualiza empresa por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID de la empresa para actualizar
 *          - in: name
 *            name: nombre
 *            description: Nombre de la empresa para actualizar, Escribir en minúsculas.
 *          - in: description
 *            name: description
 *            description: Descripcion de la empresa para actualizar, Escribir en minúsculas.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Actualizado correctamente.
 *              type: json.
 *          400: 
 *              description: ID invalida.
 *              type: json
 *          404:
 *               description: Empresa no encontrada.
 *               type: json.
 */
router.patch('/:id', auth.required, updateCompany);
/**
 * @swagger
 * /company/{id}:
 *  delete:
 *      tags: 
 *        -  company
 *      summary: Eliminar empresa.
 *      description: Elimina empresa por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID de la empresa para eliminar
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: Eliminado correctamente.
 *              type: json.
 *          400: 
 *              description: ID invalida.
 *              type: json
 *          404:
 *               description: Empresa no encontrada.
 *               type: json.
 */
router.delete('/:id', auth.isAdmin, deleteCompany);

module.exports = router;