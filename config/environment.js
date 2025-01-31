'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'team-management-app',
    environment: environment,
    rootURL: '/',
    locationType: 'hash', // Ubah dari 'auto' menjadi 'hash'
    EmberENV: {
      FEATURES: {
        // Enable experimental features on an ember canary build
      },
      EXTEND_PROTOTYPES: false,
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.locationType = 'none'; // Mengatur tipe lokasi untuk test
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Enable production-specific features here
  }

  return ENV;
};
