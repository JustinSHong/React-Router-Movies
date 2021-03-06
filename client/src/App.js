import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// style
import "./styles/App.css";
// data
import SavedList from "./Movies/SavedList";
// components
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  clearSavedList = () => {
    this.setState({ savedList: [] });
  };

  render() {
    return (
      <div className="MainContainer">
        <SavedList list={this.state.savedList} clear={this.clearSavedList} />
        {/* path to a list of movies*/}
        <Switch>
          <Route exact path="/" component={MovieList} />
          {/* path to individual movies */}
          <Route
            path="/movies/:id"
            render={props => (
              <Movie addToSavedList={this.addToSavedList} {...props} />
            )}
          />
          {/* Default */}
          <Route component={() => <h1>Invalid URL! GO BACK HOME</h1>} />
        </Switch>
      </div>
    );
  }
}
