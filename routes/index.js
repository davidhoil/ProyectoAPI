const router = require('express').Router();
const employee = require('./employee.js');
const company = require('./company.js');
const department = require('./department.js');
const user = require('./user.js');

router.get('/', (req, res) => {
    res.json({ 'INFO': 'Welcome to Proyect API' ,
     'IMPORTANT': 'Go to this route https://proyectoapi-f2.herokuapp.com/docs' });
});

router.use('/employee', employee);
router.use('/company', company);
router.use('/department', department);
router.use('/user', user);

module.exports = router;