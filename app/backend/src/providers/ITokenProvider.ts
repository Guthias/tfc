export interface tokenData {
  id: number;
  email: string;
  username: string;
}

export interface ITokenProvider {
  generateToken(tokenData: tokenData): string;
}
