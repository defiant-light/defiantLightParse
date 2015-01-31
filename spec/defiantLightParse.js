var path = require('path');
var expect = require('chai').expect;

var defiantLightParse = require(path.join(__dirname, '..', './defiantLightParse.js'));

describe('defiantLightParse()', function () {
  'use strict';

  it('exists', function () {
    expect(defiantLightParse).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
