import { RequestHandler } from 'express';

export const signupController: RequestHandler = (req, res) => {
    const data:  { 
        title: string,
        action: string,
        link: {
            href: string,
            text: string
        },
    }= {
        title: 'Authentication',
        action: 'Set SignUp Your Data',
        link: {
            href: './signin',
            text: 'retrun Login page'
        }
    }
    res.render('../views/signup.ejs', data);
}