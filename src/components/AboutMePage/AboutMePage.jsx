import React from "react";
import '../../AboutMePage.css';


const AboutMePage = () => {
    return (
      <>
        
          <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"> </span>
                            <div className="card-image">
                                <img src = {require('../../assets/image/poom.jpg')} alt="poom" className="card-image" />
                            </div>
                        
                    </div>
                    <div className="card-content">
                        <h2 className="name">Poompiput Malimatr</h2>
                        <p className="description">College of Computing</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        
      </>
    );
};

export default AboutMePage;