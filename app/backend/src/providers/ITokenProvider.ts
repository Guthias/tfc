export interface ITokenData {
  id: number;
  email: string;
  username: string;
}

export interface ITokenProvider {
  generateToken(tokenData: ITokenData): string;
  decodeToken(token: string): ITokenData,
}
