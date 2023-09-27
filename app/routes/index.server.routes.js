var express = require('express');
var router = express.Router();

var controller = require('../controllers/index.server.controller');

var aboutController = require('../controllers/about.server.controller');

var projectsController = require('../controllers/projects.server.controller');

var contactController = require('../controllers/contact.server.controller')

/* GET home page. */

router.get('/', (req, res) => {
    controller.render(req, res);
});

router.get('/about', (req, res) => {
    aboutController.render(req, res);
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', (req, res) => {
    contactController.render(req, res);
});

router.get('/projects', (req, res) => {
    projectsController.render(req, res);
});

router.get('/services', (req, res) => {
    res.render('services');
});


module.exports = router;