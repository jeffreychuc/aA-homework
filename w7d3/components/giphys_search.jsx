import React from 'react';

import GiphysIndex from './giphys_index';

class GiphySearch extends React.Component {
  constructor() {
    super();
    this.state = {searchTerm: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e)  {
    this.setState({searchTerm: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
    console.log(this.props);
    console.log("oops");
    console.log(this.props.fetchSearchGiphys(searchTerm));
    console.log("wlol");
  }
  render (){
    let { giphys } = this.props;
    console.log('render');
    return(
      <div>
        <h1>GIFYOU</h1>
        <form>
        <input value={this.state.searchTerm} onChange = {this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}> Search </button>
        </form>
        <GiphysIndex giphys={giphys}/>
      </div>
    );
  }
}

export default GiphySearch;
