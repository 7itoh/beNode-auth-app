"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const signinController_1 = require("./controller/signinController");
const signupController_1 = require("./controller/signupController");
dotenv_1.default.config();
const port = process.env.ENV_PORT;
const app = express_1.default();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.get('/', (req, res) => {
    res.redirect('/signin');
});
app.get('/signin', signinController_1.signinController);
app.get('/signup', signupController_1.signupController);
app.listen(port, () => {
    console.log(`listening on port 3000`);
});
exports.default = app;
