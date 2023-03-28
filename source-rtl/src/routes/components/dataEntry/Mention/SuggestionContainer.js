import React from "react";
import { Button, Card, Mention, Popover } from "antd";

const { toString, toContentState } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

class SuggestionContainer extends React.Component {
  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  };
  visibleChange = (visible) => {
    if (visible && this.mention) {
      this.mention.focus();
    }
  };

  render() {
    const mention = (
      <Mention
        ref={ele => this.mention = ele}
        style={{ width: '100%' }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <Card className="gx-card" title="ظروف پیشنهادی">
        <Popover
          trigger="click"
          content={mention}
          title="عنوان"
          ref={popover => this.popover = popover}
          onVisibleChange={this.visibleChange}
        >
          <Button type="primary">مرا کلیک کن</Button>
        </Popover>
      </Card>
    );
  }
}

export default SuggestionContainer;
