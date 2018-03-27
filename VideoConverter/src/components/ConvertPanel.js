import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';

class ConvertPanel extends Component {
  onCancelPressed = () => {
    this.props.removeAllVideos();
    this.props.history.push('/');
  };

  onConvertVideos = () => {
    this.props.convertVideos(this.props.videos);
  };

  render() {
    return (
      <div className="convert-panel">
        <button className="btn red" onClick={this.onCancelPressed}>
          Cancel
        </button>
        <button className="btn" onClick={this.onConvertVideos}>
          Convert!
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ videos }) => {
  return { videos };
};

export default withRouter(connect(mapStateToProps, actions)(ConvertPanel));
