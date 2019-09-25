import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
  };

  render() {
    return (
      <div>
        <h3>Enter your Search Term Here</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
          />
        </form>
        <br/>
      </div>
    );
  }
}

export default GifSearch;