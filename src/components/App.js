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

const mapDispatchToProps = (dispatch) => {
  return { searchBooks: (term) => searchBooks(term)(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
