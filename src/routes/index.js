const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.html', { title: 'HAMSA' });
});
router.get("/contacto", (req, res) => {
    res.render('contacto.html', { title: 'contacto' });
});


module.exports = router;