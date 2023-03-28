import React from "react";
import {connectSearchBox, SortBy} from "react-instantsearch-dom";

const AlgoliaHeader = () => (
  <div className="gx-algolia-header">
    <ConnectedSearchBox/>
    <div className="gx-algolia-sort-by">
      <label>مرتب سازی بر اساس</label>
      <SortBy
        items={[
          {value: 'ikea', label: 'ویژه'},
          {value: 'ikea_price_asc', label: 'صعود قیمت'},
          {value: 'ikea_price_desc', label: 'سقوط قیمت'},
        ]}
        defaultRefinement="ikea"
      />
    </div>
  </div>
);
const CustomSearchBox = ({currentRefinement, refine}) => (
  <div className="gx-search-bar gx-lt-icon-search-bar">
    <div className="gx-form-group">
      <input
        type="search"
        placeholder="جستجو در اینجا ..."
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        autoComplete="off"
        className="ant-input form-control"
        id="q"
      />
      <span className="gx-search-icon gx-pointer"><i className="icon icon-search"/></span>
    </div>
  </div>
);
const ConnectedSearchBox = connectSearchBox(CustomSearchBox);

export default AlgoliaHeader;
