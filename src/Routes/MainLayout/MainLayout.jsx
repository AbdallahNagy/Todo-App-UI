import classes from './MainLayout.module.css'
import TasksMenu from '../../components/Tasks Menu/TasksMenu';
import ListsMenu from '../../components/Lists Menu/ListsMenu';

function MainLayout() {
    return (
        <div className={classes.container}>
            <ListsMenu></ListsMenu>
            <TasksMenu></TasksMenu>
        </div>
    );
}

export default MainLayout;