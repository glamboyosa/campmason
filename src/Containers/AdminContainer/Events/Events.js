import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
import * as action from '../../../Store/actions/index';
class Events extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    let data = <Spinner />;

    if (this.props.events !== null) {
      if (!this.props.loading) {
        data = (
          <div style={{ textAlign: 'center' }}>
            <h3>Activites</h3>
            <ul>
              {this.props.events.map(el => {
                return (
                  <li key={el._id}>
                    {el.name + ' ' + el.speaker.fullname}
                    <Link style={{ margin: '20px' }} to={`events/${el._id}`}>
                      Update Event
                    </Link>
                    <Link to="/createevent" style={{ margin: '20px' }}>
                      Create Event
                    </Link>
                    <Link to={`events/delete/${el._id}`}>Delete Event</Link>
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
    events: state.event.events,
    loading: state.event.loading,
    error: state.event.error !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(action.eventsInit())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Events));
