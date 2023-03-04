import classes from './Tasks.module.css'
import TaskItem from '../Task Item/TaskItem';
import { TasksContext } from '../../hooks/TasksContext';
import { useContext } from 'react';

function Tasks() {
    const { tasks } = useContext(TasksContext);

    return (
        <div className={classes.container}>
            {tasks.length > 0 && (tasks.map(task => <TaskItem key={task._id} id={task._id} title={task.title} />))}
            {tasks.length == 0 && (<p>no tasks yet ...</p>)}
        </div>
    );
}

export default Tasks;