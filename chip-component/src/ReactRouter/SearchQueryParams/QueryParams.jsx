import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const QueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  // const [paramsValue, setParamsValue] = useState({ query: "" });
  // console.log("paramsValue", paramsValue);
  console.log("SearchParams", searchParams);

  const getOnChangeValue = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const onClickSetQueryParams = () => {
    setSearchParams({ query: search });
    setSearch("");
  };

  const onClickDeleteQueryParams = () => {
    setSearchParams((params) => {
      params.delete("query");
      return params;
    });
  };

  return (
    <>
      <h1>Search Query Params</h1>
      <input
        type="text"
        name="query"
        value={search}
        onChange={getOnChangeValue}
      />{" "}
      <br />
      <button onClick={onClickSetQueryParams}>Add search</button>
      <button onClick={onClickDeleteQueryParams}>Delete Search</button>
    </>
  );
};

export default QueryParams;
