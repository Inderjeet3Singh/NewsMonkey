import React from "react";
import {Link, Outlet} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            Navbar
          </Link >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active " aria-current="page" to="/">
                  Home
                </Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Link">
                  Link
                </Link >
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link >
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Action">
                      Action
                    </Link >
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/EditProfiles">
                      Edit Profiles
                    </Link >
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/suggestions">
                    Suggestions
                    </Link >
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}