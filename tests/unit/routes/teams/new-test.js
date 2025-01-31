import { module, test } from 'qunit';
import { setupTest } from 'team-management-app/tests/helpers';

module('Unit | Route | teams/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:teams/new');
    assert.ok(route);
  });
});
