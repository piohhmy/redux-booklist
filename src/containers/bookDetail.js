import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>{this.props.selectedBook ? this.props.selectedBook.title : 'no book'}</div>
    )
  }

}

function mapStateToProps(state) {
  return {
    selectedBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
