class user {
  public readonly id: number;
  public username: string;
  public role: 'user' | 'admin';
  public email: string;
  public password: string;

  constructor(props: Omit<user, 'id'>) {
    Object.assign(this, props);
  }
}

export default user;
