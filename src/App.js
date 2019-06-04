import React, { Component } from 'react';
import './App.css';
import Beer from './Beer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      likedBeers: []
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((beers) => this.setState({beers: beers}));
  }

  likeBeer = id => {
    const likedBeer = this.state.beers.find(beer => beer.id === id);
    const newBeers = [...this.state.likedBeers, likedBeer];
    this.setState({ likedBeers: newBeers })
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.beers.map((beer) => 
              <Beer
                key={beer.id}
                beer={beer}
                like={this.likeBeer}
              />)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;