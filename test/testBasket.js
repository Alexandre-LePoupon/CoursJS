var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };

let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato',
'potato', 'tomato', 'potato' ];

let summarizeBasket = require('../src/program.js').summarizeBasket;
let getUnique = require('../src/program.js').getUnique;

describe('summarizeBasket', function() {

	it('Empty basket', function() {
		var result = summarizeBasket(prices, []);
		expect(result.price).to.be.equal(0);
		expect(result.countArticles).to.equal(0);
		expect(result.countProducts).to.equal(0);
	})

	it('Basket with only one product should return price of the product', function() {
		var result = summarizeBasket(prices, ['cucumber']);
		expect(result.price).to.be.equal(4);
		expect(result.countArticles).to.equal(1);
		expect(result.countProducts).to.equal(1);
	})

	it('Basket with 2 different products should return basic sum of prices', function() {
		var result = summarizeBasket(prices, ['potato', 'apple']);
		expect(result.price).to.be.equal(8);
		expect(result.countArticles).to.equal(2);
		expect(result.countProducts).to.equal(2);
	})

	it('Basket with 2 sames products should return basic sum of prices with one countProducts', function() {
		var result = summarizeBasket(prices, ['salad', 'salad']);
		expect(result.price).to.be.equal(10);
		expect(result.countArticles).to.equal(2);
		expect(result.countProducts).to.equal(1);
	})

	it('Basket with 3 sames products', function() {
		var result = summarizeBasket(prices, ['banana', 'banana', 'banana']);
		expect(result.price).to.be.equal(2);
		expect(result.countArticles).to.equal(3);
		expect(result.countProducts).to.equal(1);
	})

})

describe('getUnique', function() {

	it('1 variable', function() {
		var result = getUnique(['test1']);
		expect(result).to.be.eql(['test1']);
	})

	it('2 variable', function() {
		var result = getUnique(['test1', 'test2']);
		expect(result).to.be.eql(['test1', 'test2']);
	})

	it('3 variable with 2 equal', function() {
		var result = getUnique(['test1', 'test2', 'test1']);
		expect(result).to.be.eql(['test1', 'test2']);
	})

	it('4 variable', function() {
		var result = getUnique(['test1', 'test2', 'test2', 'test3']);
		expect(result).to.be.eql(['test1', 'test2', 'test3']);
	})

	it('products', function() {
		var result = getUnique(products);
		expect(result).to.be.eql([ 'tomato', 'cucumber', 'salad', 'potato' ]);
	})

})


