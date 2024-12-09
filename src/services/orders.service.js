import http from "../http-common";

class OrderDataService {

    getAll(token) {
        return http.get("/admin/orders", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(token, id) {
        return http.get(`/user/orders/customers/${id}`,{
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

    getByCustomerId(token, customerId) {
        return http.get(`/user/orders/customer/${customerId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    placeOrder(token, data){
        return http.post(`/user/orders/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    updateOrder(token, id, formData) {
        return http.put(`/user/orders/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',  // Ensure it's multipart
            }
        });
    }

}

const orderDataService = new OrderDataService();
export default orderDataService;
