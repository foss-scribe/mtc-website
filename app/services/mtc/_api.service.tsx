import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
// const token = (localStorage.getItem('token') || null);

export class BaseApiService {
    protected api: AxiosInstance;

    constructor() {
        
        this.api = axios.create({ baseURL });
        // if (token) {
        //     this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // }
    }

     setAuthToken(token: string | null) {
        if (token) {
            this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete this.api.defaults.headers.common['Authorization'];
        }
    }

    printAuthToken() {
        console.log(this.api.defaults.headers.common['Authorization']);
    }

    protected get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.get<T>(url, config);
    }

    protected post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.post<T>(url, data, config);
    }

    protected put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.put<T>(url, data, config);
    }

    protected delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.api.delete<T>(url, config);
    }

    getRoot() {
        return this.api.get("/");
    }
}

export default new BaseApiService();