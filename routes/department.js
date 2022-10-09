const router = require('express').Router();
const {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/department.js');
const auth = require('../config/auth.js');


/**
 * @swagger
 * /department/:
 *  get:
 *      tags: 
 *        -  department
 *          
 *      summary: Departamentos disponibles.
 *      description: Entrega una lista de departamentos.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Todos los departamentos disponibles.
 *              type: json.
 */
router.get('/', auth.optional, getDepartments);
/**
 * @swagger
 * /department/{id}:
 *  get:  
 *      tags: 
 *        -  department
 *      summary: Departamento disponible. 
 *      description: Entrega departamento por ID. Necesita autentificación.
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del departamento que desea obtener
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Departamento disponible.
 *              type: json.
 *          400: 
 *              description: ID invalida.
 *              type: json
 *          404:
 *               description: Departamento no encontrado.
 *               type: json.
 */
router.get('/:id', auth.required, getDepartment);
/**
 * @swagger
 * /department/:
 *  post:
 *      tags: 
 *        -  department
 *      summary: Crear departamento.
 *      description: Agrega un nuevo departamento. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: department
 *            name: department
 *            description: Nombre del departamento. Escribir en minúsculas
 *          - in: job
 *            name: job
 *            description: Puesto. Escribir en minúsculas
 *          - in: salary
 *            name: salary
 *            description: salario
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
router.post('/', auth.required, createDepartment);
/**
 * @swagger
 * /department/{id}:
 *  patch:
 *      tags: 
 *        -  department
 *      summary: Actualizar departamento.
 *      description: Actualiza departamento por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del departamento para actualizar
 *          - in: department
 *            name: department
 *            description: Nombre del departamento para actualizar. Escribir en minúsculas
 *          - in: job
 *            name: job
 *            description: Puesto para actualizar. Escribir en minúsculas
 *          - in: salary
 *            name: salary
 *            description: salario para actualizar
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
 *               description: Departamento no encontrado.
 *               type: json.
 */
router.patch('/:id', auth.required, updateDepartment);
/**
 * @swagger
 * /department/{id}:
 *  delete:
 *      tags: 
 *        -  department
 *      summary: Eliminar departamento.
 *      description: Elimina departamento por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del departamento para eliminar
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
 *               description: Departamento no encontrado.
 *               type: json.
 */
router.delete('/:id', auth.isAdmin, deleteDepartment);

module.exports = router; 