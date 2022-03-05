const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.html', { title: 'oly xit' });
});
router.get('/catalogo', (req, res) => {
    res.render('catalogo.html', { tittle: 'Catálogo' });
});
router.get('/calendario', (req, res) => {
    res.render('calendario.html', { tittle: 'Calendario' });
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', { tittle: 'Contactanos' });
});

module.exports = router;