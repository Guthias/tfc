class Team {
  public readonly id: number;
  public teamName: string;

  constructor(props: Omit<Team, 'id'>) {
    Object.assign(this, props);
  }
}

export default Team;
