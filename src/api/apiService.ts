/* eslint-disable no-useless-catch */
import axiosInstance from "./axiosInstance";

// Generic function for GET requests
export const getRequest = async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
    try {
        const response = await axiosInstance.get<T>(url, { params });
        return response.data;
    } catch (error) {
        throw error; // Re-throw the error for caller to handle
    }
};

// Generic function for POST requests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postRequest = async <T>(url: string, data?: Record<string, any>): Promise<T> => {
    try {
        const response = await axiosInstance.post<T>(url, data);
        return response.data;
    } catch (error) {
        throw error; // Re-throw the error for caller to handle
    }
};

// Add other methods as needed (PUT, DELETE, PATCH, etc.)
export const putRequest = async <T>(url: string, data?: Record<string, unknown>): Promise<T> => {
    try {
        const response = await axiosInstance.put<T>(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteRequest = async <T>(url: string): Promise<T> => {
    try {
        const response = await axiosInstance.delete<T>(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};
