import http from "../http-common";

class OrderItemsService {
    getAll(token) {
        return http.get("/user/orderItems", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    getById(token, id) {
        return http.get(`/user/orders/${id}/orderItems`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(token, id) {
        return http.get(`/user/orderItems/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    create(token, data) {
        return http.post("/user/orderItems", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    update(token, id, data) {
        return http.put(`/user/orderItems/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    delete(token, id) {
        return http.delete(`/user/orderItems/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

const orderItemsService = new OrderItemsService();
export default orderItemsService;
