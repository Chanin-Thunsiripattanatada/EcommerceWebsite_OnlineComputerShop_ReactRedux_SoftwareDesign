import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { ProductProvider } from "../../context";

const MainPage = () => {
    return (
        <>
            <div className="container">
                <div className="row pt-4">
                    <div className="col">
                        <Content1 />
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col">
                        <Content2 />
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <ProductProvider>
                            <Content3 />
                        </ProductProvider>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainPage;