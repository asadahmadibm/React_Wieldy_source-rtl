import React from "react";
import {Card, Pagination} from "antd";

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <span className="gx-link">قبلی</span>;
  } else if (type === 'next') {
    return <span className="gx-link">بعدی</span>;
  }
  return originalElement;
}

const PrevAndNext = () => {
  return (
    <Card className="gx-card" title="شماره گذاری قبلی و بعدی">
      <Pagination total={500} itemRender={itemRender}/>
    </Card>
  );
};

export default PrevAndNext;
