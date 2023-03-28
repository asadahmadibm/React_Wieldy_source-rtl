import React from "react";
import { Badge, Calendar, Card } from "antd";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'این یک رویداد هشدار دهنده است' },
        { type: 'success', content: 'این یک اتفاق معمول است.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'این یک رویداد هشدار دهنده است' },
        { type: 'success', content: 'این یک اتفاق معمول است.' },
        { type: 'error', content: 'این یک رویداد خطا است.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'این یک رویداد هشدار دهنده است' },
        { type: 'success', content: 'این یک رویداد بسیار معمول است 。。....' },
        { type: 'error', content: 'این رویداد خطای 1 است.' },
        { type: 'error', content: 'این رویداد خطای 2 است.' },
        { type: 'error', content: 'این رویداد خطای 3 است.' },
        { type: 'error', content: 'این رویداد خطای 4 است.' },
      ];
      break;
    default:
  }
  return listData || [];
}

const NoticeCalendar = () => {
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events gx-text-left">
        {
          listData.map(item => (
            <li key={item.content}>
              <Badge className="gx-text-left" status={item.type} text={item.content} />
            </li>
          ))
        }
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>شماره عقب مانده</span>
      </div>
    ) : null;
  }

  return (
    <Card className="gx-card" title="تقویم توجه">
      <Calendar className="gx-com-calendar" dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </Card>
  );
}

export default NoticeCalendar;
