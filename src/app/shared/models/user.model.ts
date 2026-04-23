export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  lastLogin?: Date;
}

export type UserRole =
  | 'ADMIN'
  | 'MEDICO'
  | 'ENFERMERO'
  | 'FARMACEUTICO'
  | 'CAJA'
  | 'RECEPCION';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}
