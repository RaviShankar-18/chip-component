import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const searchQ = searchParams.get("q") || "NA";
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const paramsObj = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObj[key] = value;
    }
    setQueryParams(paramsObj);
  }, [searchParams]);

  const onSearchParams = () => {
    setSearchParams({ q: search });
  };

  const onDeleteParams = () => {
    setSearchParams((params) => {
      params.delete("q");
      return params;
    });
  };

  console.log("queryParams: ", queryParams);

  return (
    <div>
      <h1>My Search Params: {searchQ}</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button onClick={onSearchParams}>Add Search</button>
      <button onClick={onDeleteParams}>Delete Search</button>
    </div>
  );
};

export default QueryParams;
