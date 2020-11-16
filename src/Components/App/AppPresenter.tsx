import PropTypes from "prop-types";
import React from "react";

type AppPresenterProps = {
  isLoggedIn: boolean;
}

const AppPresenter = ({ isLoggedIn }: AppPresenterProps) =>
  isLoggedIn ? <span>로그인 상태</span> : <span>you are not</span>;

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;