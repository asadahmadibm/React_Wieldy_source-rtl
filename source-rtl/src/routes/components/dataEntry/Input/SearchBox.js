import React from "react";
import { Card, Input } from "antd";

const Search = Input.Search;

const SearchBox = () => {
  return (
    <Card className="gx-card" title="جعبه جستجو">
      <Search
        placeholder="متن جستجوی ورودی"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />

      <Search
        placeholder="متن جستجوی ورودی"
        onSearch={value => console.log(value)}
        enterButton
      />

      <Search placeholder="متن جستجوی ورودی" enterButton="جستجو" size="large" />
    </Card>
  );
};

export default SearchBox;
