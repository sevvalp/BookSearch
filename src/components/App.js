import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import books from "../apis/books.js";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = { books: [] };

  componentDidMount() {
    this.onTermSubmit("peace");
  }

  onTermSubmit = async (term) => {
    const response = await books.get("/v1/volumes", {
      params: {
        q: term,
      },
    });

    this.setState({
      books: response.data.items,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
