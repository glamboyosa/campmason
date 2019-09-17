import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class EventsUpdate extends Component {
  state = {
    name: '',
    venue: '',
    speakerId: ''
  };
  componentDidMount() {
    this.props.fetchSpeakerData();
    if (this.props.speaker !== null) {
      this.setState({
        speakerId: this.props.speaker
          .slice(0, 1)
          .map(el => el._id)
          .join('')
      });
    }
  }
  authHandler = e => {
    e.preventDefault();
    const id = Object.keys(this.props.match.params)
      .map(el => {
        return this.props.match.params[el];
      })
      .join('');
    const data = {
      name: this.state.name,
      venue: this.state.venue,
      speakerId: this.state.speakerId
    };

    this.props.update(data, this.props.token, id);
  };
  render() {
    let form = <Spinner />;
    if (this.props.speaker !== null) {
      if (!this.props.loading || !this.props.speakerLoading) {
        form = (
          <div>
            <form onSubmit={this.authHandler}>
              <h3>Edit Event</h3>

              <input
                type="text"
                minLength={2}
                maxLength={256}
                placeholder="Name of Event"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <input
                type="text"
                minLength={2}
                maxLength={256}
                placeholder="venue"
                onChange={e => this.setState({ venue: e.target.value })}
              />

              <select
                onChange={e => {
                  this.setState({ speakerId: e.target.value });
                }}
              >
                <option selected>Select host</option>
                {this.props.speaker.map(el => {
                  return <option value={el._id}>{el.fullname}</option>;
                })}
              </select>

              <button className={classes.btn} type="submit">
                Submit
              </button>
            </form>
          </div>
        );
      }
    }
    if (this.props.error) {
      form = <Modal>Oops...Something went wrong.</Modal>;
    }
    if (this.props.isUpdated) {
      form = <Redirect to="/adminevents" />;
    }
    if (!this.props.token) {
      form = <Redirect to="/adminevents" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    speakerLoading: state.speaker.loading,
    loading: state.event.loading,
    error: state.event.error != null,
    isUpdated: state.event.isUpdated,
    speaker: state.speaker.speakers,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (data, token, id) =>
      dispatch(actions.eventsPutInit(data, token, id)),
    fetchSpeakerData: () => dispatch(actions.speakersInit())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsUpdate);
