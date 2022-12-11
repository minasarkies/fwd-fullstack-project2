var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserStore } from "../user";
import { parseJwt } from "../../utils/parseJwt";
dotenv.config();
var _a = process.env, BCRYPT_SALT_ROUNDS = _a.BCRYPT_SALT_ROUNDS, BCRYPT_PEPPER = _a.BCRYPT_PEPPER, JWT_TOKEN_SECRET = _a.JWT_TOKEN_SECRET;
var store = new UserStore();
var userInstance = {
    firstname: "Justin",
    lastname: "Chan",
    username: "chanju0352-user-model-test",
};
var userInstancePassword = "CodDo128ao";
describe("User Model", function () {
    it("should have an INDEX method", function () {
        expect(store.index).toBeDefined();
    });
    it("should have a SHOW method", function () {
        expect(store.show).toBeDefined();
    });
    it("should have a CREATE method", function () {
        expect(store.create).toBeDefined();
    });
    it("should have a LOGIN method", function () {
        expect(store.login).toBeDefined();
    });
    it("should have a DELETE method", function () {
        expect(store.delete).toBeDefined();
    });
    it("CREATE method should add a user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var pepperedPassword, salt, hashPassword, user, username;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pepperedPassword = "".concat(userInstancePassword).concat(BCRYPT_PEPPER);
                    return [4 /*yield*/, bcrypt.genSalt(parseInt(BCRYPT_SALT_ROUNDS))];
                case 1:
                    salt = _a.sent();
                    hashPassword = bcrypt.hashSync(pepperedPassword, salt);
                    user = __assign(__assign({}, userInstance), { password: hashPassword });
                    return [4 /*yield*/, store.create(user)];
                case 2:
                    username = (_a.sent()).username;
                    expect({ username: username }).toEqual({
                        username: userInstance.username,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("INDEX method should return a list of users", function () { return __awaiter(void 0, void 0, void 0, function () {
        var userList, _a, firstname, lastname, username;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, store.index()];
                case 1:
                    userList = _b.sent();
                    _a = userList[0], firstname = _a.firstname, lastname = _a.lastname, username = _a.username;
                    expect([{ firstname: firstname, lastname: lastname, username: username }]).toEqual([userInstance]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("SHOW method should return a user by username", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, firstname, lastname, username;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, store.show(userInstance.username)];
                case 1:
                    _a = _b.sent(), firstname = _a.firstname, lastname = _a.lastname, username = _a.username;
                    expect({ firstname: firstname, lastname: lastname, username: username }).toEqual(userInstance);
                    return [2 /*return*/];
            }
        });
    }); });
    it("LOGIN method should return a token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var foundUser, pepperedPassword, validPassword, token, username;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.login(userInstance.username)];
                case 1:
                    foundUser = _a.sent();
                    expect(foundUser).toBeDefined();
                    pepperedPassword = "".concat(userInstancePassword).concat(BCRYPT_PEPPER);
                    validPassword = bcrypt.compareSync(pepperedPassword, foundUser.password);
                    expect(validPassword).toBeTrue();
                    token = jwt.sign({ username: foundUser.username }, JWT_TOKEN_SECRET);
                    username = parseJwt(token).username;
                    expect(username).toBe(foundUser.username);
                    return [2 /*return*/];
            }
        });
    }); });
    it("DELETE method should delete a user by username", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.delete(userInstance.username)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, store.show(userInstance.username)];
                case 2:
                    result = _a.sent();
                    // @ts-ignore
                    expect(result).toBe(undefined);
                    return [2 /*return*/];
            }
        });
    }); });
});
