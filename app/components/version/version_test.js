'use strict';

describe('FreeBiz.version module', function() {
  beforeEach(module('FreeBiz.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
