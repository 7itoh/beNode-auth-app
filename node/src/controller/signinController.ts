import { RequestHandler, Response, Request } from 'express';

export const signinController: RequestHandler = (req:Request, res:Response) => {
    const data: {
        title: string,
        pageGuide: {
            pageRef: string,
            pageAction: string,
        }
        link: {
            href: string,
            text: string
        },
    } = {
        title: 'Login',
        pageGuide: {
            pageRef: 'Set Your Email/Passwd',
            pageAction: 'Click',
        },
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    }
    res.render('../views/signin.ejs', data);
}