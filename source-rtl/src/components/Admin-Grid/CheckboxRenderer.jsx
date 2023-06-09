import React, {Component} from 'react';

class CheckboxRenderer extends Component {
  constructor(props) {
    super(props);
    this.checkedHandler = this.checkedHandler.bind(this);
  }
  checkedHandler(event) {
    let checked = event.target.checked;
    let colId = this.props.column.colId;
    this.props.node.setDataValue(colId, checked);
  }
  render() {
    return (
      <input 
        type="checkbox" 
        disabled="disabled"
        onClick={this.checkedHandler}
        checked={this.props.value}
      />
    )
  }
}


export default CheckboxRenderer;