const router = require('express').Router();
const {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee.js');
const auth = require('../config/auth.js');

/**
 * @swagger
 * /employee/:
 *  get:
 *      tags: 
 *        -  employee
 *          
 *      summary: Empleados disponibles.
 *      description: Entrega una lista de empleados.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Todos los empleados disponibles.
 *              type: json.
 */
router.get('/', auth.optional, getEmployees);

/**
 * @swagger
 * /employee/{id}:
 *  get:  
 *      tags: 
 *        -  employee
 *      summary: Empleado disponible. 
 *      description: Entrega empleado por ID. Necesita autentificación.
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del empleado que desea obtener
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Empleado disponible.
 *              type: json.
 *          400: 
 *              description: ID invalida.
 *              type: json
 *          404:
 *               description: Empleado no encontrado.
 *               type: json.
 */
router.get('/:id', auth.required, getEmployee);

/**
 * @swagger
 * /employee/:
 *  post:
 *      tags: 
 *        -  employee
 *      summary: Crear empleado.
 *      description: Agrega un nuevo empleado. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: first_name
 *            name: first_name
 *            description: Primer nombre del empleado. Escribir en minúsculas
 *          - in: last_name
 *            name: last_name
 *            description: Apellido del empleado. Escribir en minúsculas
 *          - in: number
 *            name: number
 *            description: Debe ingresar el número de teléfono.
 *          - in: address
 *            name: address
 *            description: Direccion. Escribir en minúsculas
 *          - in: email
 *            name: email
 *            description: Correo electronico. Escribir en minúsculas
 *          - in: department
 *            name: department
 *            description: Departamento asignado. Escribir en minúsculas
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
router.post('/', auth.required, createEmployee);

/**
 * @swagger
 * /employee/{id}:
 *  patch:
 *      tags: 
 *        -  employee
 *      summary: Actualizar datos del empleado.
 *      description: Actualiza datos del empleado por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del departamento para actualizar
 *          - in: first_name
 *            name: first_name
 *            description: Primer nombre del empleado para actualizar. Escribir en minúsculas
 *          - in: last_name
 *            name: last_name
 *            description: Apellido del empleado para actualizar. Escribir en minúsculas
 *          - in: number
 *            name: number
 *            description: Debe ingresar el número de teléfono para actualizar.
 *          - in: address
 *            name: address
 *            description: Direccion para actualizar. Escribir en minúsculas
 *          - in: email
 *            name: email
 *            description: Correo electronico para actualizar. Escribir en minúsculas
 *          - in: department
 *            name: department
 *            description: Departamento asignado para actualizar. Escribir en minúsculas
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
router.patch('/:id', auth.required, updateEmployee);
/**
 * @swagger
 * /employee/{id}:
 *  delete:
 *      tags: 
 *        -  employee
 *      summary: Eliminar empleado.
 *      description: Elimina empleado por ID. Necesita autentificacion JWT
 *      security:
 *          - Bearer: []
 *      parameters:
 *          - in: id
 *            name: id
 *            description: ID del empleado para eliminar.
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
 *               description: Empleado no encontrado.
 *               type: json.
 */
router.delete('/:id', auth.isAdmin, deleteEmployee);

module.exports = router; 