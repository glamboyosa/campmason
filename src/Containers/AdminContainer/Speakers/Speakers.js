import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
import * as actions from '../../../Store/actions/index';
class Speakers extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    let data = <Spinner />;

    if (this.props.speakers !== null) {
      if (!this.props.loading) {
        data = (
          <div style={{ textAlign: 'center' }}>
            <h3>Speakers/Coordinators/Hosts</h3>
            <ul>
              {this.props.speakers.map(el => {
                return (
                  <li key={el._id}>
                    {el.fullname}
                    <Link style={{ margin: '20px' }} to={`speakers/${el._id}`}>
                      Update Speaker
                    </Link>
                    <Link to="/createspeaker" style={{ margin: '20px' }}>
                      Create Speaker
                    </Link>
                    <Link to={`speakers/delete/${el._id}`}>Delete Speaker</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
    if (this.props.error) {
      data = <Modal>Oops...Something went wrong.</Modal>;
    }
    return data;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.speaker.loading,
    error: state.speaker.error != null,
    speakers: state.speaker.speakers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(actions.speakersInit())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Speakers));
