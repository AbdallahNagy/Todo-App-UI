import { Link } from 'react-router-dom'
import classes from './MainHeader.module.css'
import { MdPostAdd, MdMessage } from 'react-icons/md'

const MainHeader = () => {

    return (
        <>
            <header className={classes.header}>
                <h3 className={classes.h3}>
                    <MdMessage className={classes.MdMessage} />
                    React Posts
                </h3>
                <Link to='/create-post' className={classes.button}>
                    <MdPostAdd />
                    New Post
                </Link>
            </header>
        </>
    );
}

export default MainHeader;