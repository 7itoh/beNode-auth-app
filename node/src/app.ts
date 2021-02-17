import express, { Request, Response } from 'express'
import dotENV from 'dotenv'
import { signinController } from './controller/signinController'
import { signupController } from './controller/signupController'

dotENV.config();
const port = process.env.ENV_PORT;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req: Request, res: Response) => { 
    res.redirect('/signin');
})

app.get('/signin', signinController);

app.get('/signup', signupController);

app.listen(port, () => { 
    console.log(`listening on port 3000`);
});

export default app;