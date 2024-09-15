import axios from "axios";

export default class AuthService {
  static async login(email: string, password: string) {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });

    return response.data;
  }

  static async logout() {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/logout`);

    return response.data;
  }
}
