import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import QueryParams from "./QueryParams";

const RouteQueryParams = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QueryParams/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default RouteQueryParams;
