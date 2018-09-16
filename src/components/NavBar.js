import { connect } from "react-redux";
import PropTypes from 'prop-types';
import React from "react";

import * as actions from '../redux/actions';
import themes from "../themes";

class NavBar extends React.Component {
  static propTypes = {
    theme: PropTypes.shape({
      color: PropTypes.string
    }),
    updateTheme: PropTypes.func,
  }

  toggleTheme = () => {
    const newTheme = this.props.theme.color === themes.BLUE.color ? themes.GREEN : themes.BLUE;
    this.props.updateTheme(newTheme);
  };

  render() {
    return (
      <nav>
        <button
          onClick={this.toggleTheme}
          style={{ color: this.props.theme.color }}
        >
          Change Theme
        </button>
      </nav>
    );
  }
};

export const mapStateToProps = state => ({
  theme: state.themeState.theme
});

export const mapDispatchToProps = { ...actions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
