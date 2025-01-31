import EmberRouter from '@ember/routing/router';
import config from 'team-management-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('teams', function () {
    this.route('new');
  });
  this.route('team');
});
