const express = require("express");
const router = express.Router();

//Route User
router.get("/", (req, res) => {
    res.send("Ambil data user");
});

router.post("/", (req, res) => {
    res.send("Kirim data user");
});

router.put("/", (req, res) => {
    res.send("Ubah data user");
});

router.delete("/", (req, res) => {
    res.send("Hapus data user");
});

module.exports = router;