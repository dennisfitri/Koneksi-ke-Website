const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs")
app.set("views", "views")

app.use("/", require("./route/landing"));
app.use("/product", require("./route/product"));
app.use("/user", require("./route/user"));
app.use("/teller", require("./route/teller"));


app.listen(PORT, function(){
    console.log(`Server berjalan di port ${1234}`);
});
