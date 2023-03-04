import classes from './ListsMenu.module.css'
import Lists from '../Lists/Lists'
import { useContext } from 'react';
function ListsMenu() {

    return (
        <div className={classes.container}>
            <h3>Menu</h3>
            <div>
                <h4>Lists</h4>
                <Lists />
            </div>  
            <button>Add New List</button>
        </div>
    );
}

export default ListsMenu;