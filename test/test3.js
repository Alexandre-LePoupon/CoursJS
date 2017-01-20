var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var colours = ['white', 'blue', 'green', 'red'];
// Assert
it('WHEN the client request the list THEN 4 items are returned', function() {
	assert.lengthOf(colours, 4);
})
// Expect
it('WHEN the client request the list THEN 4 items are returned', function() {
	expect(colours).to.have.lengthOf(4);
})
// Should
it('WHEN the client request the list THEN 4 items are returned', function() {
	colours.should.have.lengthOf(4);
})