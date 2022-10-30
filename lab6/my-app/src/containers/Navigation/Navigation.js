import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import TopNavigationWrapper from "./Navigation.styled";
import Catalog from "../Catalog/Catalog";

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
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" />
        <Route path="/home" element={<Home />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
