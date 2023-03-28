import React from "react";
import { Affix, Button, Card } from "antd";

import "./containerToScroll.less";

class ContainerToScroll extends React.Component {
  render() {
    return (
      <Card className="gx-card" title="ثابت در بالای صفحه">
        <div className="scrollable-container" ref={(node) => {
          this.container = node;
        }}>
          <div className="background">
            <Affix target={() => this.container}>
              <Button type="primary">
                در بالای ظرف برطرف شده است
              </Button>
            </Affix>
          </div>
        </div>
      </Card>
    );
  }
}

export default ContainerToScroll;
