import { RequestHandler, Request, Response } from 'express';

export const signupController: RequestHandler = (req: Request, res: Response):void => {
    const data:  { 
        title: string,
        pageGuide: {
            pageRef: string,
            pageAction: string,
        }
        link: {
            href: string,
            text: string
        },
    }= {
        title: 'Authentication',
        pageGuide: {
            pageRef: 'Set SignUp Your Data',
            pageAction: 'Register'
        },
        link: {
            href: './signin',
            text: 'Retrun Login page'
        }
    }
    res.render('../views/signup.ejs', data);
}