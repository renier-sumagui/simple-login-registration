const Express = require('express');
const StudentRouter = Express.Router();
const StudentsController = require('../controllers/students-controller.js');
const Students = new StudentsController;

StudentRouter.get('/', (req, res) => {
    Students.index(req, res);
});

module.exports = StudentRouter;