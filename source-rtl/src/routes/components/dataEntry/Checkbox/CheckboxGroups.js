import React from "react";
import {Card, Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['سیب', 'گلابی', 'پرتغال'];

const options = [
  {label: 'سیب', value: 'Apple'},
  {label: 'گلابی', value: 'Pear'},
  {label: 'پرتغال', value: 'Orange'},
];

const optionsWithDisabled = [
  {label: 'سیب', value: 'Apple'},
  {label: 'گلابی', value: 'Pear'},
  {label: 'پرتغال', value: 'Orange', disabled: false},
];


const CheckboxGroups = () => {
    return (
      <Card className="gx-card" title="گروههای صندوق پستی">
        <CheckboxGroup options={plainOptions} defaultValue={['سیب']} onChange={onChange}/>
        <br/><br/>
        <CheckboxGroup options={options} defaultValue={['گلابی']} onChange={onChange}/>
        <br/><br/>
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['سیب']} onChange={onChange}/>
      </Card>
    );
  }
;

export default CheckboxGroups;
