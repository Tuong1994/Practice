import { BASE_URL } from "../Axios";

const customer = {
    getList: `${BASE_URL}/api/customer/list`,
    getDetail: `${BASE_URL}/api/customer/detail`,
    create: `${BASE_URL}/api/customer/create`,
    update: `${BASE_URL}/api/customer/update`,
    remove: `${BASE_URL}/api/customer/remove`,
}

export default customer;