import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

const Modal = ({ children }) => {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..')
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <div className={classes.container}>
                <dialog open className={classes.modal} >{children}</dialog>
            </div>
        </>
    );
}

export default Modal;