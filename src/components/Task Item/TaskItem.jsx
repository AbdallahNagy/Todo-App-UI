import classes from './TaskItem.module.css'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineUpdate } from 'react-icons/md'
import axios from 'axios';
import { useContext } from 'react';
import { TasksContext } from '../../hooks/TasksContext';

function TaskItem({ title, id }) {
    const { setTasks } = useContext(TasksContext);

    async function updateTodo() {

    }

    async function DeleteTodo() {
        await axios.delete(`http://localhost:3000/todos/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }

    async function markAsDone() {

    }

    return (
        <li className={classes.li} onClick={markAsDone}>
            <span>{title}</span>
            <p className={classes.icons}>
                <MdOutlineUpdate onClick={updateTodo} />
                <RiDeleteBinLine onClick={DeleteTodo} />
            </p>
        </li>
    );
}

export default TaskItem;