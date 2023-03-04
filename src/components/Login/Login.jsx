import classes from './Login.module.css'
import Modal from '../Modal/Modal'
import { Form, redirect } from 'react-router-dom'
import axios from 'axios';

function Login() {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' name='email' required />
                </p>
                <p>
                    <label htmlFor="password">password</label>
                    <input type="password" id='password' name='password' required />
                </p>
                <p className={classes.actions}>
                    <button type='submit'>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default Login;

export async function action({request}) {
    const formData = await request.formData();
    const signupData = Object.fromEntries(formData);
    try {
        const res = await axios.post('http://localhost:3000/users/login', signupData);
        console.log(res);
        localStorage.setItem('token', res.data.accessToken)
    } catch (err) {
        console.log(err)
    }
    return redirect('.');
}