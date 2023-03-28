import React from "react";
import {Button, Card, Modal} from "antd";


const Information = () => {
    function info() {
      Modal.info({
        title: 'این یک پیام اعلان است',
        content: (
          <div>
            <p>برخی از پیام ها ... برخی از پیام ها ...</p>
            <p>برخی از پیام ها ... برخی از پیام ها ...</p>
          </div>
        ),
        onOk() {
        },
      });
    }

    function success() {
      Modal.success({
        title: 'این یک پیام موفقیت است',
        content: 'برخی از پیام ها ... برخی از پیام ها ...',
      });
    }

    function error() {
      Modal.error({
        title: 'این یک پیام خطا است',
        content: 'برخی از پیام ها ... برخی از پیام ها ...',
      });
    }

    function warning() {
      Modal.warning({
        title: 'این یک پیام هشدار دهنده است',
        content: 'برخی از پیام ها ... برخی از پیام ها ...',
      });
    }

    return (
      <Card title="اطلاعات" className="gx-card">
        <Button onClick={info}>اطلاعات</Button>
        <Button onClick={success}>موفقیت</Button>
        <Button onClick={error}>خطا</Button>
        <Button onClick={warning}>هشدار</Button>
      </Card>
    );
  }
;

export default Information;
