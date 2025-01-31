import Model, { attr } from '@ember-data/model';

// eslint-disable-next-line ember/no-classic-classes
export default Model.extend({
  id: attr('number'),
  teamId: attr('number'),
  name: attr('string'),
  role: attr('string'),

  team: attr('team'),
});
