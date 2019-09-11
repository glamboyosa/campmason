import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';
import Modal from '../../Components/UI/Modal/modal';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Hoc from '../../hoc/hoc';
import Header from '../../Components/HomeComponent/Header/header';
import FirstSection from '../../Components/HomeComponent/Section1/section1';
import SecondSection from '../../Components/HomeComponent/Section2/section2';
class Home extends Component {
  componentDidMount() {
    this.props.fetchCamps();
  }
  onHeaderClickHandler = () => {
    this.props.history.push('/register');
  };
  onFirstSectionClickHandler = () => {
    this.props.history.push('/events');
  };
  render() {
    let content = <Spinner />;
    if (this.props.camps != null) {
      if (!this.props.loading) {
        content = (
          <Hoc>
            {this.props.camps.map(el => {
              return (
                <Header
                  begin={el.startDate}
                  end={el.endDate}
                  clicked={this.onHeaderClickHandler}
                />
              );
            })}
            <FirstSection clicked={this.onFirstSectionClickHandler} />
            <SecondSection />
          </Hoc>
        );
      }
    }

    if (this.props.error) {
      content = (
        <Modal>
          <p>Oops... Something went wrong.</p>
        </Modal>
      );
    }
    return content;
  }
}
const mapStateToProps = state => {
  return {
    camps: state.camp.camps,
    loading: state.camp.loading,
    error: state.camp.error !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCamps: () => dispatch(actions.homeInit())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
