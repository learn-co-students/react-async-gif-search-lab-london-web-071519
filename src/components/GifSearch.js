import React, {Component} from 'react';

class GifSearch extends Component {
	state = {searchInput: ''};
	handleChange = (e) => {
		e.persist();
		this.setState({searchInput: e.target.value});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.searchInput(this.state.searchInput);
	};

	render() {
		return (
			<div className="search">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.searchInput}
					/>{' '}
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default GifSearch;
