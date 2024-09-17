import http from "../http-common";

class ProductDataService {
  // Helper method to set Authorization header
//   setAuthHeader(token) {
//     return { headers: { Authorization: `Bearer ${token}` } };
//   }

  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/admin/products", data);
  }

  update(id, data) {
    return http.put(`/admin/products/${id}`, data);
  }

  delete(id, token) {
    return http.delete(`/admin/products/${id}`);
  }

}

const productDataService = new ProductDataService();
export default productDataService;

