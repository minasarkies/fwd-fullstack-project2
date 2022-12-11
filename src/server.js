import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./handlers/product";
import userRoutes from "./handlers/user";
import orderRoutes from "./handlers/order";
var app = express();
var address = "0.0.0.0:3000";
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("This is homepage of storefront project");
});
productRoutes(app);
userRoutes(app);
orderRoutes(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
export default app;
