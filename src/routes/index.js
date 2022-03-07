const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.html', { title: 'HAMSA' });
});
router.get("/contacto", (req, res) => {
    res.render('contacto.html', { title: 'contacto' });
});
router.get("/calendario", (req, res) => {
    res.render('calender.html', { title: 'Calendario' });
});
router.get("/catalago", (req, res) => {
    res.render('magazine.html', { title: 'Catalogo' });
});


module.exports = router;