import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { searchBooks } from "../actions";

class App extends React.Component {
  onTermSubmit(term) {
    console.log(this.props);
    this.props.searchBooks(term);
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

export default connect(mapStateToProps, { searchBooks })(App);
