"use client";

import React, { useState, useEffect } from "react";


const Header = () => {


    return (
      <div
        className="header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "60px",
          width: "100%",
          display: "flex-end",
          alignItems: "center", 
          justifyContent: "space-between",
          backgroundColor: "var(--sub6)", 
          zIndex: 1 ,
        }}
      >

      <div className="dropdown dropdown-end flex">
          <div className="flex-none">
            <button 
              className="btn btn-square btn-ghost mx-4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
      </div>


    </div>

    );
  };
  
  export default Header;