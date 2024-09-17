import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderHistory from './OrderHistory';

const OrderPage = () => {

    return (
        <div>
            <h1>Orders</h1>
            <OrderHistory />
        </div>
    );
};

export default OrderPage;