// router/Router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import NotFound from "../pages/notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:title" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
