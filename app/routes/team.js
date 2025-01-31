// routes/team.js
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class TeamRoute extends Route {
  @service('router') router;
  @service('store') store;
  model(params) {
    return this.store.findRecord('team', params.team_id).catch((error) => {
      console.error('Error loading team:', error);
      // Optional: redirect to error page
      this.router.transitionTo('error');
    });
  }
}
