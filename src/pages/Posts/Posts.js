import { useEffect, useState, Fragment, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Button } from '@mui/material'
import { fetchPosts } from '../../services/posts-service'

function Posts() {
    const [posts, setPosts] = useState([])
    const [val, setVal] = useState(true)
    const navigate = useNavigate()

    const getPostsCallback = useCallback(async function getPosts() {
        try {
            const posts = await fetchPosts()
            setPosts(posts)
        } catch (err) {
            console.log('posts err: ', err)
        }
    }, [])

    useEffect(() => {
        getPostsCallback()
        // addPosts()
    }, [getPostsCallback])

    const openPost = post => {
        navigate(`/posts/${post.id}`, { state: { post } })
    }

    const renderedPosts = useMemo(() => posts.map(post => {
        return <Fragment key={post.id}>
            <ListItem disablePadding onClick={() => openPost(post)}>
                <ListItemButton>
                    <ListItemIcon>{post.id}.</ListItemIcon>
                    <ListItemText primary={post.title} style={{ marginLeft: '-1.5rem', textTransform: 'capitalize' }} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </Fragment>
    }), [posts])

    const calculate = useMemo(() => {
        // console.log('running func')
        return 10
    }, [])


    const handleRestPosts = () => {
        setPosts([])
    }


    // console.log('rendering')
    return (
        <>
            <button onClick={() => setVal(!val)}>test</button>
            <div>{calculate}</div>
            <Button onClick={handleRestPosts}>Reset Posts</Button>
            <List>{renderedPosts}</List>
        </>
    )
}
export default Posts