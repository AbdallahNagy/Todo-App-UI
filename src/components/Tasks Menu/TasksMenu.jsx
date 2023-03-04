import classes from './TasksMenu.module.css'
import Tasks from '../Tasks/Tasks'

function TasksMenu() {
    return (
        <div className={classes.container}>
            <h3>Tasks</h3>
            <div>
                <Tasks />
            </div>
            <div className={classes.btns}>
                <button>Show All Todos</button>
                <button>Add Todo</button>
            </div>
        </div>
    );
}

export default TasksMenu;