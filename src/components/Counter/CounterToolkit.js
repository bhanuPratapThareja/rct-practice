import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../../store/slices/counter-slice';

function CounterToolkit() {
    const dispatch = useDispatch()
    const counterState = useSelector(({ counter }) => counter)

    const onResetCounter = () => {
            dispatch(counterActions.reset())
    }

    return (
        <div>
            {counterState.showCounter && <p>{counterState.counter}</p>}
            <br />
            <Button variant='text' onClick={() => dispatch(counterActions.increment())}>Increment</Button>
            <Button variant='text' onClick={() => dispatch(counterActions.decrement(5))}>Decrement</Button>
            <Button variant='text' onClick={() => dispatch(counterActions.toggleCounter())}>Toggle Counter</Button>
            <Button variant='text' onClick={onResetCounter}>Reset Counter</Button>
        </div>
    )
}

export default CounterToolkit