import http from "../../http-common";

class OrderDataService {

    getAll(token) {
        return http.get("/admin/orders", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(token, id) {
        return http.get(`/user/orders/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    getOrderItems(token, id) {
        return http.get(`/user/orders/${id}/orderItems`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    create(token, data) {
        return http.post("/user/orders", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    update(token, id, data) {
        return http.put(`/user/orders/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    delete(token, id) {
        return http.delete(`/admin/orders/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    getByCustomerId(token, customerId) {
        return http.get(`/user/orders/customer/${customerId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    placeOrder(token, customerId, data){
        return http.post(`/user/orders/customer/${customerId}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

}

const orderDataService = new OrderDataService();
export default orderDataService;
