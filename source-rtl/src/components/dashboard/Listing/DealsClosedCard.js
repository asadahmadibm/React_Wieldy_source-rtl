import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Widget from "components/Widget/index";
import { Badge } from "antd";

const data = [
  { name: 'فروردین', closedDeals: 200, queries: 600, },
  { name: 'اردیبهشت', closedDeals: 500, queries: 900, },
  { name: 'خرداد', closedDeals: 700, queries: 1200, },
  { name: 'تیر', closedDeals: 800, queries: 1300, },
  { name: 'مرداد', closedDeals: 700, queries: 1200, },
  { name: 'شهریور', closedDeals: 500, queries: 900, },
  { name: 'مهر', closedDeals: 600, queries: 200, },
  { name: 'آبان', closedDeals: 200, queries: 800, },
  { name: 'آذر', closedDeals: 400, queries: 400, },
  { name: 'دی', closedDeals: 400, queries: 500, },
  { name: 'بهمن', closedDeals: 400, queries: 1200, },
  { name: 'اسفند', closedDeals: 200, queries: 800, },
];

const DealsClosedCard = () => {

  return (
    <Widget>
      <div className="gx-dealclose-header">
        <div>
          <h2 className="h4 gx-mb-2">927 معاملات بسته شد</h2>
          <p className="gx-text-grey">امسال</p>
        </div>
        <div className="gx-dealclose-header-right">
          <p className="gx-mb-2"><Badge className="gx-mb-0" status="warning" />نمایش داده شد</p>
          <p className="gx-mr-2 gx-mb-2"><Badge className="gx-mb-0" status="processing" />معاملات بسته شده</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={114}>
        <BarChart data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Tooltip />
          <XAxis dataKey="name" />
          <Bar dataKey="closedDeals" stackId="a" fill="#038FDE" barSize={8} />
          <Bar dataKey="queries" stackId="a" fill="#FE9E15" barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default DealsClosedCard;
