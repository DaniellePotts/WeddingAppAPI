const express = require("express");
const router = express.Router();

router.get('/names', (req, res) => {
    res.send('Hello World!')
})

router.put('/:id',(req, res) => {
    res.send('Hello World!')
})

router.get('/all',(req, res) => {
    res.send('Hello World!')
})


module.exports = router;