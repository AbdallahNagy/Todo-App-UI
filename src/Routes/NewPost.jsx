import classes from './NewPost.module.css'
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

const NewPost = () => {

    return (
        <Modal>
            <Form method='post' className={classes.form} >
                <p>
                    <label htmlFor="body">text</label>
                    <textarea id="body" name='body' rows="3" required></textarea>
                </p>
                <p>
                    <label htmlFor="name">your name</label>
                    <input type="text" id="name" name='author' required></input>
                </p>
                <p className={classes.actions}>
                    <Link to='..' type='button' >Cancel</Link>
                    <button type='submit'>Ok</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // give me key:value pairs
    await fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    })

    return redirect('..');
}