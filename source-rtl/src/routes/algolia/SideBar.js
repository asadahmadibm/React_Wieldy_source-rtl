import React from "react";
import { Layout } from "antd";
import {
  ClearRefinements,
  HierarchicalMenu,
  Panel,
  RangeInput,
  RatingMenu,
  RefinementList,
} from "react-instantsearch-dom";

const { Sider } = Layout;
const Sidebar = () => (
  <Sider className="gx-algolia-sidebar">
    <div className="gx-algolia-sidebar-content">
      <ClearRefinements
        translations={{
          reset: 'پاک کردن فیلترها',
        }}
      />

      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">نمایش نتایج برای</div>
        <HierarchicalMenu
          attributes={['category', 'sub_category', 'sub_sub_category']}
        />
      </div>

      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">اصلاح شده توسط</div>

        <Panel header={<span>تایپ کنید</span>}>
          <RefinementList className="gx-algolia-refinementList" attribute="type" operator="or" limit={5} searchable />
        </Panel>

        <Panel header={<span>مواد</span>}>
          <RefinementList className="gx-algolia-refinementList"
            attribute="materials"
            operator="or"
            limit={5}
            searchable
          />
        </Panel>


        <Panel header={<span>رتبه بندی</span>}>
          <RatingMenu className="gx-algolia-refinementList" attribute="rating" max={5} />
        </Panel>

        <Panel header={<span>قیمت</span>}>
          <RangeInput className="gx-algolia-refinementList" attribute="price" />
        </Panel>
      </div>

      <div className="thank-you">
        برگرفته از <a href="http://www.ikea.com/">ikea.com</a>
        <p>تمامی اطلاعات در این صفحه توسط سرویس api فراخوانی می شود</p>
      </div>
    </div>
  </Sider>
);


export default Sidebar;

