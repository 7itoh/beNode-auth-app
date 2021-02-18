"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinController = void 0;
exports.signinController = (req, res) => {
    const data = {
        title: 'Login',
        pageGuide: {
            pageRef: 'Set Your Email/Passwd',
            pageAction: 'Click',
        },
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    };
    res.render('../views/signin.ejs', data);
};
