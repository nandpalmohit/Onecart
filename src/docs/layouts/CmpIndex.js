import React, { Fragment, useEffect, useState } from "react";
import CmpHeader from "./CmpHeader";
import CmpNavbar from "./CmpNavbar";
import CmpSection from "./CmpSection";
import CmpAuth from "./Auth/CmpAuth";
import { apiProducts } from "../api/apiLinks";
import axios from "axios";

const CmpIndex = (props) => {
  const loginCred = [
    {
      name: "Mohit Nandpal",
      email: "mohit@gmail.com",
      password: "mohit@123",
    },
    {
      name: "Admin OneCart",
      email: "admin@gmail.com",
      password: "admin@123",
    },
    {
      name: "Dummy user",
      email: "user@gmail.com",
      password: "user@123",
    },
  ];

  localStorage.setItem("loginCredentials", JSON.stringify(loginCred));

  return (
    <div className={props.isLoginActive ? "enabled" : "disabled"}>
      <CmpNavbar
        isLoginActive={props.isLoginActive}
        setIsLoginActive={props.setIsLoginActive}
        authCallback={props.authCallback}
      />
      <CmpHeader />
      <CmpSection />
      {props.isLoginActive && (
        <CmpAuth
          setIsLoginActive={props.setIsLoginActive}
          authCallback={props.authCallback}
        />
      )}
    </div>
  );
};

export default CmpIndex;
