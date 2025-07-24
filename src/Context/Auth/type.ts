export interface User {
  id: number;
  name: string;
  created_at: string;
  high_score: number;
}

export interface LoginResponseData {
  user: User;
  accessToken: string;
}
