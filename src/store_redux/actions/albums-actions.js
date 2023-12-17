import axios from 'axios'

export const getAlbums = () => async dispatch => {
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums')
    dispatch({ type: 'FETCH_ALBUMS', payload: albums.data })
}