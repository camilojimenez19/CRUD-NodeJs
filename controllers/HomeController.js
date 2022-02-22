const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect("/employee");
});

module.exports = router;