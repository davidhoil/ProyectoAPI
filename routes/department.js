const router = require('express').Router();
const {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/department.js');
const auth = require('../config/auth.js');

router.get('/', auth.optional, getDepartments);
router.get('/:id', auth.required, getDepartment);
router.post('/', auth.required, createDepartment);
router.patch('/:id', auth.required, updateDepartment);
router.delete('/:id', auth.isAdmin, deleteDepartment);

module.exports = router; 