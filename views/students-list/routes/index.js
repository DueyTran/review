const router = require('express').Router();
const student = require('../controllers/students.controller');

router.get("/", student.listStudentsPage);
router.get("/addStudent", student.addUpdateStudentsPage);

module.exports = router;