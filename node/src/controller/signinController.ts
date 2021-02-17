import { RequestHandler } from 'express';

export const signinController: RequestHandler = (req, res) => {
    const data: {
        title: string,
        action: string,
        link: {
            href: string,
            text: string
        },
    } = {
        title: 'Login',
        action: 'Set Your Email/Passwd',
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    }
    res.render('../views/signin.ejs', data);
}