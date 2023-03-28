import React from "react";
import { Button, Card, message } from "antd";

const success = () => {
  const hide = message.loading('اقدام در حال انجام ..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

const Loading = () => {
  return (
    <Card title="لودینگ" className="gx-card">
      <Button onClick={success}>نشانگر بارگذاری را نشان می دهد</Button>
    </Card>
  );
};

export default Loading;
