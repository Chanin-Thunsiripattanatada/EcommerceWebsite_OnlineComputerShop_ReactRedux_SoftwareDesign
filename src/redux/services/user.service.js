import http from "../../http-common";

class UserDataService {
    get(token, id) {
        return http.get(`/user/customers/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    create(token, data) {
        return http.post("/user/customers", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    update(token, id, data) {
        return http.put(`/user/customers/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    register(data){
        return http.post(`/registration`, data)
    }

}
const userDataService = new UserDataService();
export default UserDataService;