import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { searchBooks, setLoading } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTermSubmit = this.onTermSubmit.bind(this);
  }
  onTermSubmit(term) {
    this.props.setLoading(true);
    this.props.searchBooks(term);
  }

  render() {
    const { loading, bookList } = this.props;
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {loading === true && <Spinner />}
        {loading === false && <BookList bookList={bookList} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bookList: state.books, loading: state.utilities.loading };
};

export default connect(mapStateToProps, { searchBooks, setLoading })(App);
