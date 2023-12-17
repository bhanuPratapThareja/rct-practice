import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import CounterToolkit from '../../components/Counter/CounterToolkit';

import { albumsActions } from '../../store/slices/albums-slice'
import { reset } from '../../store/actions/reset-action'

function Albums() {
    const dispatch = useDispatch()

    useEffect(() => {
        getAlbums()
    }, [])

    const getAlbums = () => {
        dispatch(albumsActions.loadAlbums([
            { name: 'album name', desc: 'desc1' },
            { name: 'album name2', desc: 'desc2' }
        ]))
        // dispatch(albumsActions.loadAlbums({ name: 'album name', desc: 'desc1' }))
    }

    const onResetAlbums = () => {
        dispatch(reset())
    }

    return (
        <>
            <Button onClick={onResetAlbums}>Reset Albums</Button>
            <div>Albums</div>
            <CounterToolkit />
        </>
    )
}
export default Albums