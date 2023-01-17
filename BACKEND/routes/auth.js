const { model } = require("mongoose");

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'thios',
        number: 34
    }
})

module.exports = router