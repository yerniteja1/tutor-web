export interface School {
  id: string;
  code: string;
  name: string;
  address: string;
}

export interface LoginFormData {
  mobileNo: string;
  password: string;
  keepLoggedIn: boolean;
}

export interface Institution {
  id: string;
  name: string;
  code: string;
  address: string | null;
  phone?: string | null;
  email?: string | null;
  isActive: boolean;
}

export interface User {
  id: string;
  name: string;
  mobileNo: string;
  role: 'admin' | 'teacher' | 'student' | string;
  isActive: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}