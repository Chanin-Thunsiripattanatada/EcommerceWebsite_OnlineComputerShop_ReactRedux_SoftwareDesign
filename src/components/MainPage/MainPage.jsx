import React from "react";
import CarouselImage from "./CarouselImage";
import PartnerCarousel from "./PartnerCarousel";
import FeaturedProduct from "./FeaturedProduct";
import { ProductProvider } from "../../context";
import CartTab from "../CartPage/CartTab";

const MainPage = () => {
    return (
        <>
            <div className="container">
                <div className="row pt-4">
                    <div className="col">
                        <CarouselImage />
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col">
                        <PartnerCarousel />
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <FeaturedProduct />
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainPage;