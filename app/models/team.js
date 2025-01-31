// models/team.js
import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @attr('string') description;
  @hasMany('member', { async: true }) members;
}
