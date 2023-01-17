"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var product_1 = __importDefault(require("./handlers/product"));
var user_1 = __importDefault(require("./handlers/user"));
var order_1 = __importDefault(require("./handlers/order"));
var app = (0, express_1.default)();
var address = "localhost:3000";
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.send("This is homepage of storefront project");
});
(0, product_1.default)(app);
(0, user_1.default)(app);
(0, order_1.default)(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
