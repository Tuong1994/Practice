import { BASE_URL } from "../Axios"

const location = {
    getCities: `${BASE_URL}/api/city/list`,
    getDistricts: `${BASE_URL}/api/district/list`,
    getWards: `${BASE_URL}/api/ward/list`,
}

export default location