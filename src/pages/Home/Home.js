import classes from './Home.module.css'
import { Box } from '@mui/material'
// import { styled } from 'styled-components'
// import Counter from '../../components/Counter/Counter'
// import FunctionalCounter from '../../components/Counter/FunctionalCounter';


// const BoxStyles = styled.div`
//     height: 100%;
//     width: 100%;
//     background-color: ${({ testcolor }) => testcolor ? testcolor : 'red'}
// `

export default function HomePage() {

    // const stateArr = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ]

    // const newArr = stateArr
    // console.log(newArr)
    // newArr[0][0] = 10
    // console.log(newArr)
    // console.log(stateArr)

    //shallow copy
    // const shallowStateArr = [...stateArr]
    // console.log(shallowStateArr)
    // shallowStateArr[0][0] = 11
    // console.log(stateArr)

    // const shallowStateArraySlice = stateArr.slice()
    // console.log(shallowStateArraySlice)
    // shallowStateArraySlice[0] = 11.5
    // console.log(stateArr)

    //deep copy
    // const deepStateArr = JSON.parse(JSON.stringify(stateArr))
    // console.log(deepStateArr)
    // deepStateArr[0][0] = 12
    // console.log(stateArr)

    //deep copy
    // const deepMapStateArr = [...stateArr.map(innerArray => [...innerArray])]
    // console.log(deepMapStateArr)
    // deepMapStateArr[0][0] = 13
    // console.log(stateArr)

    //To remove an element from an array filter others or use splice index, 1


    return (
        <Box className={classes.gamepage}>

            {/* <Counter id={4} /> */}
            {/* <FunctionalCounter /> */}
            {/* 

            <Box id={classes['gamebox']}>
                <BoxStyles onClick={() => console.log('testing')} testcolor='blue' ></BoxStyles>
            </Box> */}


            {/* <h4 className={`${classes.he} ${classes.llo} ml-10`}>Hello</h4> */}
        </Box>
    )
}