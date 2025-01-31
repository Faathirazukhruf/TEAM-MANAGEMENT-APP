import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  @service('store') store;
  model() {
    return this.store.findAll('team'); // Memastikan 'this.store' sudah ada
  }
}
