const router = require('express').Router();
const { signUp, logIn } = require('../controllers/user.js');

/**
 * @swagger
 * /user/signUp:
 *  post:
 *      tags: 
 *        -  user
 *      summary: Crear usuario.
 *      description: Agrega un nuevo usuario.
 *      parameters:
 *          - in: body
 *            name: Nuevo usuario
 *            description: Escribe en JSON los datos del Usuario. Ver README.md
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: Creado correctamente.
 *              type: json.
 *          400: 
 *              description: Nombre de usuario/contraseña proporcionados no válidos.
 *              type: json
 */
router.post('/signUp', signUp);

/**
 * @swagger
 * /user/logIn:
 *  post:
 *      tags: 
 *        -  user
 *      summary: Iniciar Sesion.
 *      description: Incia Sesion.
 *      parameters:
 *          - in: body
 *            name: logIn
 *            description: username y password en JSON
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: Creado correctamente.
 *              type: json.
 *          400: 
 *              description: Nombre de usuario/contraseña proporcionados no válidos.
 *              type: json
 */
router.post('/logIn', logIn);

module.exports = router;