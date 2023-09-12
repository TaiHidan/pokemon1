import axios from "axios";

const headers = {
  Accept: 'application/json',
  'Content-Type': 'appication/json; charset=utf-8'
}

class AxioClient {
  instance = null

  get http() {
    if (this.instance == null) {
      this.instance = this.init(); // Thêm dấu () để gọi hàm init()
    }
    return this.instance;
  }

  get(url) {
    return this.http.get(url);
  }

  init() {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_HOST_API,
      headers,
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const { data } = error;
        return this.handleResponseError(data);
      }
    );
    return axiosInstance;
  }

  handleResponseError(error) {
    return Promise.reject(error);
  }
}

const axiosclient = new AxioClient();
export default axiosclient;
