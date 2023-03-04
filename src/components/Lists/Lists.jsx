import axios from 'axios';
import classes from './Lists.module.css'
import { useLoaderData } from 'react-router-dom';
import ListItem from '../List Item/ListItem';

function Lists() {
    const lists = useLoaderData();

    return (
        <>
            <div className={classes.container}>
                {lists.map(list => <ListItem key={list._id} title={list.title} />)}
            </div>
        </>
    );
}

export default Lists;

export async function loader() {
    const res = (await axios.get('http://localhost:3000/lists/', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }));

    console.log(res.data);
    return res.data;
}