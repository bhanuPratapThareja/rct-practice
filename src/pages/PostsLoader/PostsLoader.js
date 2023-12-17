import { useState, useCallback } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Grid, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button } from '@mui/material'
import SelectedPost from './SelectedPost/SelectedPost'

export default function Loader(props) {
    const posts = useLoaderData()
    console.log('posts: ', props)
    const [selectedPost, setSelectedPost] = useState(null)
    const [bool, setBool] = useState(false)

    const onShowConsole = useCallback((val) => {
        console.log('showing Console: ', val)
    }, [])

    if (!posts) return null
    if (posts.error) return <p>{posts.message}</p>

    console.log('posts rendering')

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Button variant="outlined" onClick={() => setBool(!bool)}>Change boolean</Button>
                <List>
                    {posts.map(post => {
                        return (
                            <Box key={post.id}>
                                <ListItem disablePadding onClick={() => setSelectedPost(post)}>
                                    <ListItemButton>
                                        <ListItemIcon>{post.id}.</ListItemIcon>
                                        <ListItemText primary={post.title} style={{ marginLeft: '-1.5rem', textTransform: 'capitalize' }} />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </Box>
                        )
                    })}
                </List>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    {/* <SelectedPost post={selectedPost} /> */}
                    {selectedPost && <SelectedPost
                        titleContainer="h4"
                        // {...selectedPost}
                        post={selectedPost}
                        showConsole={onShowConsole}
                    />}
                </Box>
            </Grid>
            <style>{`
                .css-h4y409-MuiList-root {
                    padding: 0;
                }
            `}</style>
        </Grid>
    )
}