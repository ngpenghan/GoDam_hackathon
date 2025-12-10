// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export interface User {
  _id?: string;
  name: string;
  ic: string;
  bloodType: string;
  dateOfBirth?: string;
  gender?: string;
  phone?: string;
  email?: string;
  allergies?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export const userService = {
  // Get all users
  async getAllUsers(): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  // Get user by IC
  async getUserByIC(ic: string): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${ic}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  },

  // Create new user
  async createUser(user: User): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create user');
    }
    return response.json();
  },

  // Update user
  async updateUser(ic: string, user: Partial<User>): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${ic}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
  },

  // Delete user
  async deleteUser(ic: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/users/${ic}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete user');
  },
};
