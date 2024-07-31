import React from "react";
import '../App.css';
import Content1 from "./MainPage/Content1";
import Content2 from "./MainPage/Content2";
import Content3 from "./MainPage/Content3";
const MainPage = () => {
    return (
      
            <div className="container">
                <div className="row pt-4">
                    <div className="col">
                    <><Content1/></>
                    </div>
                </div>
                
                <div className="row pt-4">
                <div className="col">
                    <><Content2/></>
                    </div>
                </div>
                <div className="row pt-4">
                <div className="col">
                    <><Content3/></>
                    </div>
                </div>
            </div>
        
    )
};

export default MainPage;