import React from "react";
import { Card, Mention } from "antd";

const { toString } = Mention;
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function Disabled() {
  function onChange(editorState) {
    console.log(toString(editorState));
  }

  return (
    <Card className="gx-card" title="غیرفعال">
      <div className="gx-mb-3">
        <Mention
          style={{ width: '100%' }}
          onChange={onChange}
          placeholder="این غیرفعال است"
          suggestions={users}
          disabled
        />
      </div>
      <Mention
        style={{ width: '100%' }}
        onChange={onChange}
        placeholder="این خوانده شده است فقط ذکر"
        suggestions={users}
        readOnly
      />
    </Card>
  );
}

export default Disabled;
