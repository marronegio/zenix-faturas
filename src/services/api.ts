import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.zenixapp.com.br'
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratar erros de token expirado
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Se o erro for 401 e ainda não tentamos renovar o token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Tenta renovar o token
        const response = await axios.post('https://api.zenixapp.com.br/users/refresh', {}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        // Se conseguiu renovar, salva o novo token
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          
          // Atualiza o token na requisição original e tenta novamente
          originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Se não conseguiu renovar, limpa o token e redireciona para login
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api; 