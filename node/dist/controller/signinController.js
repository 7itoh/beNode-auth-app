"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinController = void 0;
exports.signinController = (req, res) => {
    const data = {
        title: 'Login',
        action: 'Set Your Email/Passwd',
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    };
    res.render('../views/signin.ejs', data);
};
