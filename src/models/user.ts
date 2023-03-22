export interface User {
  id: string;
  email: string;
  name: string;
  address: string;
  password: string;
}

export interface UserResponse extends Omit<User, "password"> {}

export interface UserRegister extends Omit<User, "id"> {
  confirmPassword: string;
}
