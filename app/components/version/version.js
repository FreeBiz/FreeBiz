'use strict';

angular.module('FreeBiz.version', [
  'FreeBiz.version.interpolate-filter',
  'FreeBiz.version.version-directive'
])

.value('version', '0.1');
