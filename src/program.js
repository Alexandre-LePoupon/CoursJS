let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato',
'potato', 'tomato', 'potato' ];

let getUnique = (array) => {
	let newArray = [];
	let checker = {};

	for (let i = 0; i < array.length; i++) {
		let item = array[i];
		if(!checker[item]) {
			checker[item] = true;
			newArray.push(item);
		}
	}
	return newArray;
};

let numberOfItem = (array) => {
	var counts = {};
	for(var i = 0; i< array.length; i++) {
	    var num = array[i];
	    counts[num] = counts[num] ? counts[num]+1 : 1;
	}
	return counts;
};

let summarizeBasket = (prices, products) => {

	let price = 0;
	products.forEach(function(products) {
		price += prices[products];
	})

	return {
		price: price,
		countArticles: products.length,
		countProducts: getUnique(products).length
	}
};

console.log(numberOfItem(products));
console.log(numberOfItem(products).tomato);

console.log(numberOfItem(products));
console.log(getUnique(products));

console.log(summarizeBasket(prices, products));

module.exports = {
	summarizeBasket: summarizeBasket,
	getUnique: getUnique
}

//console.log(`price:  ${price}, countArticles: ${countArticles} , countProducts: ${countProducts}`);

// should return
// { price: 25, countArticles: 10, countProducts: 4 }