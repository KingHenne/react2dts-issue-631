import React from "react";
import PropTypes from "prop-types";
import { Provider, Consumer } from "./context";

class Theme extends React.Component {
  static propTypes = {
    tokens: PropTypes.objectOf(PropTypes.string),
    children: PropTypes.element
  };

  static defaultProps = { tokens: {} };

  render() {
    const { children, tokens } = this.props;
    return (
      <Consumer>
        {contextTokens => (
          <Provider value={{ ...contextTokens, ...tokens }}>
            {children}
          </Provider>
        )}
      </Consumer>
    );
  }
}

export default Theme;
