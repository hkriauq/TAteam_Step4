"use client";

import React from 'react';



const Summary = () => {

    return (
        <div className="flex flex-col aline-center justify-center mb-5">
            <div className="title flex aline-center justify-center mb-3"
             style={{fontSize:"18px",color:"var(--sub11)",fontWeight:"bold"}}>
                サマリー
            </div>
            <div className="Summary"
                style={{ 
                    display: 'flex',
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40vh',
                    width: '40vh',
                    backgroundColor: 'var(--sub10)',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                }}>
                <a style={{ fontSize: '22px', padding:'10px 0px 10px 0px',borderBottom: "2px solid var(--sub11)"}}>2024年4月</a>
                <a style={{ fontSize: '16px', padding:'30px 0px 0px 0px'}}>総利用食数</a>
                <a style={{ fontSize: '45px', padding:'3px 0px 3px 0px' }}>1210　食</a>
                <a style={{ fontSize: '16px', padding:'30px 0px 0px 0px' }}>総利用人数</a>
                <a style={{ fontSize: '45px', padding:'3px 0px 3px 0px' }}>336　人</a>
            </div>
        </div>
    );
};

export default Summary 