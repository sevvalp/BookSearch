import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { searchBooks } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTermSubmit = this.onTermSubmit.bind(this);
  }

  onTermSubmit(term) {
    searchBooks(term)(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {!this.props.bookList.length ? (
          <Spinner />
        ) : (
          <BookList bookList={this.props.bookList} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bookList: state.books };
};

export default connect(mapStateToProps)(App);
