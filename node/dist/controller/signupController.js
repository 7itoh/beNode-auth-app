"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
exports.signupController = (req, res) => {
    const data = {
        title: 'Authentication',
        action: 'Set SignUp Your Data',
        link: {
            href: './signin',
            text: 'retrun Login page'
        }
    };
    res.render('../views/signup.ejs', data);
};
