"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var repository = require("./repository");
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(helmet_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    repository.TEST().then(function (value) {
        console.log(value);
        res.send(value);
    }, function (error) {
        res.send(error);
    });
});
app.listen(PORT, function () { return console.log("Running on " + PORT + " \u26A1"); });
