import React from "react";
import { Card, Tag } from "antd";

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['فیلم', 'کتاب', 'موزیک', 'ورزش'];

class HotTag extends React.Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ?
      [...selectedTags, tag] :
      selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <Card title="برچسب های داغ" className="gx-card">
        <h6 style={{ marginRight: 8, display: 'inline' }}>دسته بندی:</h6>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Card>
    );
  }
}

export default HotTag;
