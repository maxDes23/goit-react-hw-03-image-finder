import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

export default Button;
