import classes from './Modal.module.css'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import { Box, Button } from '@mui/material'

const Modal = forwardRef((props, ref) => {
    const dialogRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.style.display = 'block'
                setTimeout(() => {
                    dialogRef.current.style.opacity = 1
                    dialogRef.current.style.transform = 'translateY(-30%)'
                    dialogRef.current.showModal()
                }, 300);
            },
            close() {
                onCloseDialog()
            }
        }
    })

    function onCloseDialog() {
        dialogRef.current.style.opacity = 0
        dialogRef.current.style.transform = 'translateY(-40%)'
        dialogRef.current.close()
        setTimeout(() => {
            dialogRef.current.style.display = 'none'
        }, 300);
    }


    return createPortal(
        <dialog className={classes.modal} ref={dialogRef} onClose={onCloseDialog}>

            <Box className={classes.modal__heading}>
                <h4>Heading</h4>
            </Box>

            <Box className={classes.modal__body}>
                {props.children}
            </Box>

            <Box className={classes.modal__buttons}>
                <Button variant="text" onClick={props.onSave} className={classes.modal__button}>Save</Button>
                <Button variant="text" onClick={onCloseDialog} className={classes.modal__button}>Cancel</Button>
            </Box>

        </dialog>,
        document.getElementById('modal')
    )
})

export default Modal