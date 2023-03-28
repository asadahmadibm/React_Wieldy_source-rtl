import React from "react";
import {Button, Card, Modal} from "antd";

const confirm = Modal.confirm;

const ConfirmationModal = () => {
    function showConfirm() {
      confirm({
        title: 'آیا می خواهید این موارد را حذف کنید؟',
        content: 'برخی از توضیحات',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

    function showDeleteConfirm() {
      confirm({
        title: 'مطمئن هستید این کار را حذف می کنید؟',
        content: 'برخی از توضیحات',
        okText: 'بله',
        okType: 'هشدار',
        cancelText: 'خیر',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

    return (
      <Card title="مودال با کانفریم" className="gx-card">
        <Button onClick={showConfirm}>
        تایید
        </Button>
        <Button onClick={showDeleteConfirm} type="dashed">
          حذف
        </Button>
      </Card>
    );
  }
;

export default ConfirmationModal;
