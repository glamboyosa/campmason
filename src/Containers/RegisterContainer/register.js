import React, { Component } from 'react';
import * as actions from '../../Store/actions/index';
import { connect } from 'react-redux';
import classes from './register.module.css';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/modal';
class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    country: ''
  };
  componentDidMount() {
    this.props.fetchPhoneData();
  }
  formHandler = e => {
    e.preventDefault();
    console.log('submitted');
    const newPhoneNumber = this.state.phone.substring(1);
    console.log(newPhoneNumber);
    console.log(this.state.country);
    const phone = this.state.country + newPhoneNumber;
    console.log(phone);
    const data = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      phone: phone
    };
    console.log(data);
    this.props.onFormSubmitted(data);
  };

  render() {
    let form = <Spinner />;
    if (this.props.phone != null) {
      if (!this.props.loading) {
        form = (
          <div className={classes.flexContainer}>
            <div>
              <img
                src="https://cdn.dribbble.com/users/727440/screenshots/6244299/camping.gif"
                alt="camping gif"
              />
            </div>
            <form onSubmit={this.formHandler}>
              <h3>Your summer of fun begins now</h3>
              <input
                type="text"
                placeholder="Firstname"
                onChange={e => this.setState({ firstname: e.target.value })}
              />
              <input
                type="text"
                placeholder="Lastname"
                onChange={e => this.setState({ lastname: e.target.value })}
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
                Register
              </button>
            </form>
          </div>
        );
      }
    }
    if (this.props.error) {
      form = <Modal>Oops...Something went wrong</Modal>;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.register.loading,
    error: state.register.error,
    phone: state.register.phone
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPhoneData: () => dispatch(actions.fetchPhone()),
    onFormSubmitted: data => dispatch(actions.registerInit(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
