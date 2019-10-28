import React, {Component} from 'react';

class GifList extends Component {
	renderImages = () =>
		this.props.imageLinks.map((link, id) => (
			<img src={link} key={id} alt="giphy" />
		));
	render() {
		return <div>{this.renderImages()}</div>;
	}
}

export default GifList;
