const { model } = require("mongoose");
const express = require('express');
const { application } = require("express");
const router = express.Router();
const User = require('../models/User')

router.post('/', (req, res) => {
    console.log(req.body)
    const user = user(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router