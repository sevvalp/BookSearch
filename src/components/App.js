import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import books from "../apis/books.js";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { books: [], loading: false };

  onTermSubmit = async (term) => {
    this.setState({ loading: true });
    const response = await books.get("/v1/volumes", {
      params: {
        q: term,
      },
    });

    this.setState({
      books: response.data.items,
      loading: false,
    });
  };

  render() {
    if (!this.state.loading && !this.state.books.length) {
      return (
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <Spinner message="Enter a title" />
        </div>
      );
    } else if (this.state.loading) {
      return (
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <Spinner />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <BookList books={this.state.books} />
        </div>
      );
    }
  }
}

export default App;
