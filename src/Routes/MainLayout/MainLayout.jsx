import classes from './MainLayout.module.css'
import TasksMenu from '../../components/Tasks Menu/TasksMenu';
import ListsMenu from '../../components/Lists Menu/ListsMenu';
import { TasksContext } from '../../hooks/TasksContext';
import { useState } from 'react';

function MainLayout() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className={classes.container}>
            <TasksContext.Provider value={{ tasks, setTasks }}>
                <ListsMenu></ListsMenu>
                <TasksMenu></TasksMenu>
            </TasksContext.Provider>
        </div>
    );
}

export default MainLayout;