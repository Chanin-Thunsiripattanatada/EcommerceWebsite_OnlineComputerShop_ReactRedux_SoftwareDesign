import http from "../http-common";

class CategoryDataService {

    async getAll(token) {
        return http.get("/categories");
    }

    get(token, id) {
        return http.get(`/categories/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    create(token, data) {
        return http.post("/admin/categories", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    update(token, id, data) {
        return http.put(`/admin/categories/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    delete(token, id) {
        return http.delete(`/admin/categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

}

const categoryDataService = new CategoryDataService();
export default categoryDataService;
