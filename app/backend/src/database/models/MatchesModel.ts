import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamModel';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamBoals!: number;
  inProgress!: boolean;
}

Matches.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'Matches',
  tableName: 'matches',
  underscored: true,
});

Matches.belongsTo(Teams, { as: 'teamHome', foreignKey: 'homeTeam' });
Matches.belongsTo(Teams, { as: 'teamAway', foreignKey: 'awayTeam' });
Teams.hasMany(Matches, { foreignKey: 'id' });

export default Matches;
