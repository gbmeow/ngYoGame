/**
 * Created by jerzybatalinski on 2015-08-02.
 */
const angular = require('angular');

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('gameapp', []);

require('./directives')(ngModule);
