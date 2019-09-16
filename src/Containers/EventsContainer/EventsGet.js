import React, { Component } from 'react';
import Section from '../../Components/EventsComponent/MainSectionGet/section';
import { connect } from 'react-redux';
import * as action from '../../Store/actions/index';
import { withRouter } from 'react-router-dom';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/modal';
class Events extends Component {
  componentDidMount() {
    this.props.onGetEvents();
    this.props.remove();
  }
  onClickHandler = () => {
    this.props.history.push('/register');
  };
  render() {
    let section = <Spinner />;
    if (this.props.events != null) {
      if (!this.props.loading) {
        const name = this.props.events.map(el => {
          return `${el.name} by ${el.speaker.fullname}`;
        });
        console.log(this.props.events);
        console.log(name);

        section = (
          <div>
            <Section eventBy={name} clicked={this.onClickHandler} />;
          </div>
        );
      }
    }
    if (this.props.error) {
      section = <Modal>Oops... Something went wrong.</Modal>;
    }
    return section;
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
    onGetEvents: () => dispatch(action.eventsInit()),
    remove: () => dispatch(action.removeStyle())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Events));
