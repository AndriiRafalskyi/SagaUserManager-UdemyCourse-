import axios from 'axios';

export const usersApi = {
    loadUsers: async () => await axios.get("http://localhost:5000/users"),
    createUser: async (user) => await axios.post('http://localhost:5000/users', user),
    deleteUser: async (userId) => await axios.delete(`http://localhost:5000/users/${userId}`)
}