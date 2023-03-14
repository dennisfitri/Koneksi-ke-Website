const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Ambil data");
});

router.post("/", (req, res) => {
    res.send("Kirim data");
});

router.put("/", (req, res) => {
    res.send("Ubah data");
});

router.delete("/", (req, res) => {
    res.send("Hapus data");
});

module.exports = router;