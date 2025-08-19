export interface User {
  id: number;
  username: string;
  created_at: string;
  high_score: number;
}

export interface UpdateUserDTO {
  username: string;
  new_password: string;
}

export interface LoginResponseData {
  user: User;
  accessToken: string;
}
