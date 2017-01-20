var expect = require('chai').expect;

describe('GIVEN a list of 4 colours: white, blue, green, red', function() {
	var colours = ['white', 'blue', 'green', 'red'];
	it('WHEN the client request the list THEN 4 items are returned', function() {
		expect(colours.length).to.equal(4);
	});
	it('WHEN the client request the second item THEN the item expected is blue', function() {
		expect(colours[1]).to.equal('blue');
	});
});