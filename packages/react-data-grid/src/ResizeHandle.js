import React from 'react';

import Draggable from './Draggable';

export default class ResizeHandle extends React.Component {
  render() {
    return (
      <Draggable
        {...this.props}
        className="react-grid-HeaderCell__resizeHandle"
      />
    );
  }
}
