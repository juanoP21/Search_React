import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";


const RoterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/items" element={<SearchResults />} />
      <Route path="/items/:id" element={<ProductDetail />} />
    </Routes>
  );
}
export default RoterDom;