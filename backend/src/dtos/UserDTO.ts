export interface UserResponseDTO {
  id: string;
  username: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDTO {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  username?: string;
  name?: string;
  email?: string;
  password?: string;
}
