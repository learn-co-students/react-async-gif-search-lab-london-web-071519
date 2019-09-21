import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends React.Component {
    
    state = {
        gifs: [],
        gifSearch: ''
    }
    
    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({gifs: gifs.data.slice(0,3)})
        })
        .catch(error => alert(error.message))
    }
    
    handleFormSubmit = searchTerm => {
        debugger
    }

    render() {
        const {gifs} = this.state
        const {handleFormSubmit} = this
        return (
            <div>
                < GifSearch gifs={gifs} handleFormSubmit={handleFormSubmit}/>
                < GifList gifs={gifs} />
            </div>
        )
    }
}
