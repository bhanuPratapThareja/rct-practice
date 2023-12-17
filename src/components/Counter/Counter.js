// import { Component } from 'react'
// import { connect } from 'react-redux'
// import { Button } from '@mui/material';

// import { incrementCounter, decrementCounter } from '../../store_redux/actions/counter-actions'

// class Counter extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.counter}</p>
//                 <br />
//                 <Button variant='text' onClick={() => this.props.incrementer.bind(this)(5)}>Increment</Button>
//                 <Button variant='text' onClick={() => this.props.decrementer.bind(this)(2)}>Decrement</Button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         incrementer: (val) => dispatch(incrementCounter(val)),
//         decrementer: (val) => dispatch(decrementCounter(ownProps.id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)