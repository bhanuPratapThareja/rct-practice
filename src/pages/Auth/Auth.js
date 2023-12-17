import { useState, useRef } from 'react'
import { Button } from '@mui/material'
import Login from './Login/Login'
import Register from './Register/Register'
import { styled } from 'styled-components'
import Modal from '../../components/Modal/Modal';

const SwitchButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: '4rem';
`

function Auth() {
    const [authMode, setAuthMode] = useState('login')
    const [timerRunning, setTimerRunning] = useState(false)
    const timerRef = useRef()
    const modalRef = useRef()

    const authForm = authMode === 'login' ? <Login /> : <Register />

    function onSwitchAuthMode() {
        const newAuthMode = authMode === 'login' ? 'register' : 'login'
        setAuthMode(newAuthMode)
    }

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            console.log('timer running')
        }, 1000)
        setTimerRunning(true)
    }

    const stopTimer = () => {
        console.log('stop timer')
        clearInterval(timerRef.current)
        setTimerRunning(false)
    }

    const onOpenModal = () => {
        modalRef.current.open()
    }

    const onSave = () => {
        console.log('save clicked!')
        modalRef.current.close()
    }


    return (
        <>
            <Modal ref={modalRef} onSave={onSave}>
                <p>Body content</p>
            </Modal>
            <SwitchButtonBox>
                <Button variant="text" onClick={onSwitchAuthMode}>
                    Switch to {authMode === 'login' ? 'Register' : 'Login'}
                </Button>
                <Button onClick={timerRunning ? stopTimer : () => startTimer()} variant="text">{timerRunning ? 'stop' : 'start'} timer</Button>
                <Button  variant="text" onClick={onOpenModal}>Open Modal</Button>
            </SwitchButtonBox>
            {authForm}
        </>
    )
}
export default Auth