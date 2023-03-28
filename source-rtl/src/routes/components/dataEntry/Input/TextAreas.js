import React from "react";
import {Card, Input} from "antd";

const {TextArea} = Input;


const TextAreas = () => {
  return (
    <Card className="gx-card" title="مناطق متن">
      <TextArea rows={4}/>
    </Card>
  );
};

export default TextAreas;
