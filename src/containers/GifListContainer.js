import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
class GifListContainer extends Component {
	state = {gifs: []};

	newSearch = (query = 'monkeys') =>
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
		)
			.then((resp) => resp.json())
			.then((resp) => this.storeImageLinks(resp.data));

	storeImageLinks = (images) => {
		this.setState({gifs: images.map((image) => image.images.original.url)});
	};

	componentDidMount() {
		this.newSearch();
	}

	render() {
		return (
			<div>
				<GifSearch searchInput={this.newSearch} />
				<GifList imageLinks={this.state.gifs} />
			</div>
		);
	}
}

export default GifListContainer;
