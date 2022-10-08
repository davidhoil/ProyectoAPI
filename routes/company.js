const router = require('express').Router();
const {
    createCompany,
    getCompanys,
    getCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company.js');
const auth = require('../config/auth.js');

router.get('/', auth.optional, getCompanys);
router.get('/:id', auth.required, getCompany);
router.post('/', auth.required, createCompany);
router.patch('/:id', auth.required, updateCompany);
router.delete('/:id', auth.isAdmin, deleteCompany);

module.exports = router;