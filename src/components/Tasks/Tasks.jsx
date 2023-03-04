import { useLoaderData } from 'react-router-dom';
import classes from './Tasks.module.css'
import axios from 'axios';
import TaskItem from '../Task Item/TaskItem';

function Tasks() {
    // const tasks = useLoaderData();
    const tasks = [1, 3, 2]
    return (
        <>
            <div className={classes.container}>
                {tasks.map(task => <TaskItem key={task._id} title={task.title} />)}
            </div>
        </>
    );
}

export default Tasks;