import React from 'react';

// 必须大写
class FullName extends React.Component {
  render() {
    return (
      <div>{ this.props.user.firstName + ' ' + this.props.user.lastName }</div>
    );
  }
}

export default FullName;