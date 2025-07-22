export interface User {
  id: number;
  name: string;
  created_at: string;
}

export interface LoginResponseData {
  user: User;
  accessToken: string;
}
