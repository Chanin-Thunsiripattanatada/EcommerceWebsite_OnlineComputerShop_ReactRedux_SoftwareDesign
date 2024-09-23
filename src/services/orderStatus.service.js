import http from "../http-common";

class OrderStatusDataService {

    // Get all order statuses
    getAllOrderStatuses(token) {
        return http.get(`/user/order-status`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    // Get order status by ID
    getOrderStatusByOrderId(token, orderId) {
        return http.get(`/user/order-status/order/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    // Create new order status (with image upload)
    createOrderStatus(token, formData) {

        return http.post(`/user/order-status/create`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // Update existing order status (with or without image)
    updateOrderStatus(token, statusId, orderId, customerId, status, verificationDate, adminNote, imageFile) {
        const formData = new FormData();
        formData.append("orderId", orderId);
        formData.append("customerId", customerId);
        formData.append("status", status);
        formData.append("verificationDate", verificationDate);
        formData.append("adminNote", adminNote);
        if (imageFile) {
            formData.append("imageFile", imageFile);
        }

        return http.put(`/user/order-status/update/${statusId}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // Delete order status by ID
    deleteOrderStatus(token, statusId) {
        return http.delete(`/user/order-status/delete/${statusId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

const orderStatusDataService = new OrderStatusDataService();
export default orderStatusDataService;
