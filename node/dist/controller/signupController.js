"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
exports.signupController = (req, res) => {
    const data = {
        title: 'Authentication',
        pageGuide: {
            pageRef: 'Set SignUp Your Data',
            pageAction: 'Register'
        },
        link: {
            href: './signin',
            text: 'Retrun Login page'
        }
    };
    res.render('../views/signup.ejs', data);
};
