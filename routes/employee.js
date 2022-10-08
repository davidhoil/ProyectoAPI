const router = require('express').Router();
const {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee.js');
const auth = require('../config/auth.js');

router.get('/', auth.optional, getEmployees);
router.get('/:id', auth.required, getEmployee);
router.post('/', auth.required, createEmployee);
router.patch('/:id', auth.required, updateEmployee);
router.delete('/:id', auth.isAdmin, deleteEmployee);

module.exports = router; 