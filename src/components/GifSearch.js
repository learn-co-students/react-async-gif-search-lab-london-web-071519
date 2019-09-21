import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    handleFromChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.searchTerm)
    }

    render() {
        const {searchTerm} = this.state
        const {handleSubmit, handleFromChange} = this
        return (
            <div style={{margin: '20px'}}>
                <form onSubmit={handleSubmit}>
                    <label>Search for a Gif: </label>
                    <input type="text" value={searchTerm} onChange={handleFromChange}/>
                    <button type="submit">Find Gif</button>
                </form>
            </div>
        )
    }
}