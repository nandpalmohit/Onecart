import React, { useEffect, useState } from "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import Navbar from "../components/Navbar/Navbar";
import CategoryNavbar from "../components/Navbar/CategoryNavbar";
import { apiCategories } from "../api/apiLinks";
import axios from "axios";

// most searched data
const mostSearched = [
  {
    name: "Watch",
    slug: "/category/watch",
  },
  {
    name: "mobile",
    slug: "/category/mobile",
  },
  {
    name: "mobile cover",
    slug: "/category/mobile-cover",
  },
  {
    name: "accessories",
    slug: "/category/accessories",
  },
];

// categorybox links
const Links = [
  {
    name: "home",
    slug: "/",
    title: "home page",
  },
  {
    name: "shop",
    slug: "/shop",
    title: "shop page",
  },
  {
    name: "brands",
    slug: "/brands",
    title: "brands page",
  },
  {
    name: "aboutus",
    slug: "/about-us",
    title: "about us page",
  },
  {
    name: "today's-deal",
    slug: "/today-deal",
    title: "todays-deal page",
  },
  {
    name: "blog",
    slug: "/blog",
    title: "blog page",
  },
];

const CmpNavbar = (props) => {
  const [apiResponse, setapiResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  useEffect(() => {
    axios
      .get(apiCategories, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setapiResponse(response.data))
      .catch((error) => setapiErrors(error));
  }, []);

  return (
    <>
      {props.isTopNavbarActive !== "false" && (
        <TopNavbar
          title="Welcome to OneCart store"
          authCallback={props.authCallback}
          isLoginActive={props.isLoginActive}
          setIsLoginActive={props.setIsLoginActive}
        />
      )}
      {props.isNavbar !== "false" && <Navbar mostSearched={mostSearched} />}
      {props.isCategoryNavbar !== "false" && (
        <CategoryNavbar
          title="FREE SHIPPING OVER ₹999+"
          links={Links}
          apiResponse={apiResponse}
          error={apiErrors}
        />
      )}
    </>
  );
};

export default CmpNavbar;
