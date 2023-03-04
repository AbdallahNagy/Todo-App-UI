import axios from 'axios';
import classes from './ListItem.module.css'
import { useContext } from 'react';
import { TasksContext } from '../../hooks/TasksContext';

function ListItem({ title, listId }) {
    const {tasks, setTasks} = useContext(TasksContext);

    async function getListTasks() {
        const res = await axios.get(`http://localhost:3000/lists/${listId}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        setTasks(res.data);
    }

    return (
        <li onClick={getListTasks} className={classes.li}>{title}</li>
    );
}

export default ListItem;

