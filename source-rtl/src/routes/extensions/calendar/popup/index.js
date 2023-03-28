import React from "react";
import BigCalendar from "react-big-calendar";
import events from "../events";
import moment from "moment";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const Popup = () => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <h3 className='callout'>
        در هر روز تقویم روی پیوند "+ x more" کلیک کنید که نمی تواند در تمام روزهای رویداد متناسب باشد تا یک پنجره داخلی از همه رویدادها را مشاهده کنید.
        </h3>
        <BigCalendar
          popup
          events={events}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    </div>
  )
};

export default Popup;
