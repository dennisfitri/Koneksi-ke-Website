//const { application } = require("express");
const express = require("express");
const router = express.Router();
const db = require('../connection.js')
const app = express()

app.set("view engine", "ejs")
app.set("views", "views") //untuk ngasih tau template kita ada di views

//Route User
router.get("/", (req, res) => {
    db.query("SELECT * FROM product", (error, result) => {
        // console.log("hasil database -> ", result)
        const products = JSON.parse(JSON.stringify(result))
        // app.get("/", (req, res) => {
            res.render("index.ejs", { products: "products" });
        // //hasil dari mysql
        // console.log(result)
        })
    });

// db.connect((err) => {
//     // if (err) {
//     //     console.error('error connecting: ' + err.stack);
//     //     return;
//     // }

//     const sql = "SELECT * FROM product"
//     db.query(sql, (err, result) => {
//         console.log("hasil database -> ", result)
//         const products = JSON.parse(JSON.stringify(result))
//         app.get("/", (req, res) => {
//             res.send(products)
//         })
//     })
// })

router.post("/", (req, res) => {
    res.send("Kirim data product");
});

router.put("/", (req, res) => {
    res.send("Ubah data product");
});

router.delete("/", (req, res) => {
    res.send("Hapus data product");
});

module.exports = router;