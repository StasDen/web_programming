import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import TopNavigationWrapper from "./Navigation.styled";
import Catalog from "../Catalog/Catalog";
import {
  DokotooViewMorePage,
  MoleraniViewMorePage,
  BelongsciViewMorePage,
  ElescatViewMorePage,
} from "../ItemPage/ViewMoreItemPage";

// Top nav
const Navigation = () => {
  return (
    <BrowserRouter>
      <TopNavigationWrapper>
        <div>
          <ul>
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </TopNavigationWrapper>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/dokotoo" element={<DokotooViewMorePage />} />
        <Route path="/catalog/molerani" element={<MoleraniViewMorePage />} />
        <Route path="/catalog/belongsci" element={<BelongsciViewMorePage />} />
        <Route path="/catalog/elescat" element={<ElescatViewMorePage />} />
        <Route path="/cart" />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
