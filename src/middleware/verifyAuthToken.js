import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
var JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
var verifyAuthToken = function (req, res, next) {
    var authorizationHeader = req.headers.authorization; // OR req.header("authorization")
    var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(" ")[1];
    if (!token) {
        return res.status(401).send("Access denied. Token missing.");
    }
    try {
        jwt.verify(token, JWT_TOKEN_SECRET);
        next();
    }
    catch (err) {
        res.status(400).send("Invalid token");
        return;
    }
};
export default verifyAuthToken;
