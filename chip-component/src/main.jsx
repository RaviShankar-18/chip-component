import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LiveSearch from "./LiveSearch.jsx";
import Chip from "./Chip.jsx";
import MyComponent from "./MyComponent.jsx";
import SearchComponent from "./SearchComponent.jsx";
import Person from "./Person.jsx";
import CheckArmstrongNumber from "./CheckArmstrongNumber.jsx";
import IsArmstrongNumber from "./IsArmstrongNumber.jsx";
import SearchInList from "./SearchInList.jsx";
import AppRoute from "./AppRoute.jsx";
import ComponentsRoutes from "./ComponentsRoutes.jsx";
import Product from "./Product.jsx";
import ProductDetails from "./FakeStoreApiProducts/Pages/ProductDetails/ProductDetails.Layout.jsx";
import QueryParams from "./ReactRouter/QueryParams.jsx";
import ReactMemo from "./React.memo/IncrementParent.jsx";
import FilePicker from "./FilePickerApp/FilePicker.jsx";
import PhotoApp from "./FilePickerApp/PhotoApp.jsx";
import ImageFilterComponent from "./FilePickerApp/ImageFilterComponent.jsx";
import { BrowserRouter, Route, Router } from "react-router-dom";
import WithOutQueryParams from "./ReactRouter/QueryParams/WithoutQueryParams.jsx";
import WithQueryParams from "./ReactRouter/QueryParams/WithQueryParams.jsx";
import AppRoutes from "./ReactRouter/DynamicRouting/AppRoute.jsx";
import RouteQueryParams from "./ReactRouter/SearchQueryParams/RouteQueryParams.jsx";
import VoiceTextApp from "./VoiceToTextApp/VoiceTextApp.jsx";
import CheckInternet from "./CheckInternetConnection/CheckInternet.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* <App /> */}
    {/* <LiveSearch /> */}
    {/* <Chip /> */}
    {/* <MyComponent /> */}
    {/* <SearchComponent /> */}
    {/* <Person /> */}
    {/* <CheckArmstrongNumber/> */}
    {/* <IsArmstrongNumber /> */}
    {/* <SearchInList /> */}
    {/* <AppRoute /> */}
    {/* <ComponentsRoutes /> */}
    {/* <Product /> */}
    {/* <ProductDetails /> */}
    {/* <ReactMemo /> */}
    {/* <FilePicker /> */}
    {/* <PhotoApp /> */}
    {/* <ImageFilterComponent /> */}
    {/* <QueryParams /> */}
    {/* <WithOutQueryParams /> */}
    {/* <WithQueryParams /> */}
    {/* <BrowserRouter>
      <AppRoutes />
    </BrowserRouter> */}
    {/* <RouteQueryParams /> */}
    {/* <VoiceTextApp /> */}
    <CheckInternet />
  </React.Fragment>
);
