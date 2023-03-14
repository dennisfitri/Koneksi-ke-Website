const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    if (req.query){
        res.send(req.query.abcd);
    } else {
        res.send("Selamat datang di bank ABC");
    }
});

router.get("/:id", (req, res) => {
    res.send(req.params);
});

router.get("/:name/:umur", (req, res) => {
    res.send(req.params);
});

router.get('/:namateller/counter/:nomor', (req, res) => {

    res.send(req.params);
});

module.exports = router;