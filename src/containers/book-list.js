import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/selectBook';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    });
  }
  render() {
    return (
      <ul className="list-group offset-sm-4 col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  // Whatever is returned from will show up as props inside BookList
  return {
    books: state.books
  };
}

// anything returend from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all our reducers by passing it through 'dispatch'
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


// Promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
