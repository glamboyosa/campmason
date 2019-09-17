import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class CampUsersUpdate extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: ''
  };
  componentDidMount() {
    this.props.fetchPhoneData();
  }
  authHandler = e => {
    e.preventDefault();
    const id = Object.keys(this.props.match.params)
      .map(el => {
        return this.props.match.params[el];
      })
      .join('');
    const newPhoneNumber = this.state.phone.substring(1);

    const phone = this.state.country + newPhoneNumber;

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: phone
    };

    this.props.update(data, id);
  };
  render() {
    let form = <Spinner />;
    if (this.props.phone !== null) {
      if (!this.props.loading || !this.props.phoneLoading) {
        form = (
          <div>
            <form onSubmit={this.authHandler}>
              <h3>Modify attendee data</h3>

              <input
                type="text"
                minLength={2}
                maxLength={256}
                placeholder="Firstname"
                onChange={e => this.setState({ firstName: e.target.value })}
              />
              <input
                type="text"
                minLength={2}
                maxLength={256}
                placeholder="Lastname"
                onChange={e => this.setState({ lastName: e.target.value })}
              />
              <div className={classes.formFlexContainer}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={e => this.setState({ phone: e.target.value })}
                />
                <select
                  onChange={e => {
                    this.setState({ country: e.target.value });
                  }}
                >
                  <option selected>Select Your Country</option>
                  {this.props.phone.map(el => {
                    return <option value={el.phone}>{el.name}</option>;
                  })}
                </select>
              </div>
              <input
                type="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
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
      form = <Redirect to="/campusers" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    phoneLoading: state.register.loading,
    loading: state.campUser.loading,
    error: state.campUser.error != null,
    isUpdated: state.campUser.isUpdated,
    phone: state.register.phone
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (data, id) => dispatch(actions.campUsersPutInit(data, id)),
    fetchPhoneData: () => dispatch(actions.fetchPhone())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampUsersUpdate);
