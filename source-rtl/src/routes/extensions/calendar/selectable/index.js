import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import events from "../events";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
const Selectable = () => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <h3 className="callout">
        برای دیدن اطلاعات بیشتر روی یک رویداد کلیک کنید یا برای انتخاب دامنه تاریخ / زمان ، ماوس را روی تقویم بکشید.
        </h3>
        <BigCalendar
          selectable
          events={events}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )}
        />
      </div>
    </div>
  )
};

export default Selectable;
