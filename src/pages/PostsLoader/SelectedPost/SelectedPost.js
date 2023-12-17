import { Component, memo } from 'react'
import { Button } from '@mui/material'
import birdImg from '../../../assets/pic1.jpeg'

class SelectedPost extends Component {

    constructor(props) {
        super()
        // console.log(props)
    }

    state = { post: null, edit: false }

    static getDerivedStateFromProps({ post }, state) {
        // console.log('props: ', id, title, userId, body)
        // return null
        const { id, title, userId, body } = post
        return { post: { userId, id, title, body } }
    }

    componentDidMount() {
        // console.log(this.props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState)
        return { snap: 'shot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps, prevState, snapshot)
        // console.log(prevProps)
        // console.log(this.props)
    }

    render() {
        console.log('selected post rendering')
        const { post } = this.state
        if (!post) {
            return (
                <p>Please select a post</p>
            )
        }

        const { id, title, body } = post
        const TitleContainer = this.props.titleContainer

        let idDiv = <p>Selected post Id: {id}</p>

        if (this.state.edit) {
            idDiv = (
                <>
                    <label>Selected post Id: </label>
                    <input type='text' name='id' value={id} onChange={() => { }} />
                </>
            )
        }

        let pTagClasses = "bg-slate-500 mt-8"

        if (this.state.edit) {
            pTagClasses += ' text-white'
        } else {
            pTagClasses += ' text-pink-300'
        }

        return (
            <div className="flex flex-col justify-center text-center">
                {idDiv}
                <TitleContainer>Title: {title}</TitleContainer>
                <div className="flex justify-center">
                    <img src={birdImg} alt='bird' width={200} />
                </div>
                <p className={pTagClasses}>Body: {body}</p>
                <Button onClick={() => this.props.showConsole('test')}>Console</Button>
                <Button onClick={() => this.setState({ edit: !this.state.edit })}>Edit</Button>
            </div>
        )
    }
}

export default memo(SelectedPost)