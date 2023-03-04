import classes from './ListItem.module.css'

function ListItem({ title }) {
    return (
        <li className={classes.li}>{title}</li>
    );
}

export default ListItem;