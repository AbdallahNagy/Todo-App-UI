import classes from './Signup.module.css'
import Modal from '../Modal/Modal'
import { Form, redirect } from 'react-router-dom'
import axios from 'axios';

function Signup() {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="username">username</label>
                    <input type="text" id='username' name='username' required />
                </p>
                <p>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' name='email' required />
                </p>
                <p>
                    <label htmlFor="password">password</label>
                    <input type="password" id='password' name='password' required />
                </p>
                <p>
                    <label htmlFor="confirm-password">confirm password</label>
                    <input type="password" id='confirm-password' name='confirm-password' required />
                </p>
                <p className={classes.actions}>
                    <button type='submit'>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default Signup;

export async function action({request}) {
    const formData = await request.formData();
    const signupData = Object.fromEntries(formData);
    try {
        const res = await axios.post('http://localhost:3000/users/', signupData);
        console.log(res);
        localStorage.setItem('token', res.data.accessToken)
    } catch (err) {
        console.log(err)
    }
    return redirect('.');
}