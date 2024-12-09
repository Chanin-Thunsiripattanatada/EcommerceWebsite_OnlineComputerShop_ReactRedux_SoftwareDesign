import http from "../http-common";

class ProductDataService {


  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(token, formData) {
    return http.post('/admin/products', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  update(token, id, formData) {
    return http.put(`/admin/products/${id}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  delete(token, id) {
    return http.delete(`/admin/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}

const productDataService = new ProductDataService();
export default productDataService;

