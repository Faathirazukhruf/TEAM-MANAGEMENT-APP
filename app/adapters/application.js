import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}

// DO NOT DELETE: this is used by ember-cli-content-security-policy
