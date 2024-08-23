import React from "react";
import { Link } from "react-router-dom";

const Content2 = () => {
    return (
        <>
            <h2>Category</h2>
            <hr></hr>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Content2;